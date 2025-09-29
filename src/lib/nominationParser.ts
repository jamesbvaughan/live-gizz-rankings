import type { Show, Song, Album } from "@/drizzle/schema";

interface ParsedNomination {
  songId?: string;
  showId?: string;
  confidence: number;
}

interface ParseContext {
  songs: (Song & { album: Album })[];
  shows: Show[];
}

/**
 * Attempts to parse a nomination message to extract song and show information
 * Returns the best matches with a confidence score
 */
export function parseNomination(
  message: string,
  context: ParseContext,
): ParsedNomination {
  // Extract potential song name (everything before " at ", " in ", " live ", etc.)
  const songPatterns = [
    /^(.+?)\s+(?:at|in|live|from|during)\s+/i,
    /^(.+?)\s+-\s+/i,
    /^(.+?)\s+\(/i,
  ];

  let potentialSongName = "";
  for (const pattern of songPatterns) {
    const match = message.match(pattern);
    if (match && match[1]) {
      potentialSongName = match[1].trim();
      break;
    }
  }

  // If no pattern matched, try first part before common separators
  if (!potentialSongName) {
    const firstPart = message.split(/\s+(?:at|in|live|from|during|-|\()/i)[0];
    if (firstPart && firstPart.length > 2) {
      potentialSongName = firstPart.trim();
    }
  }

  // Extract potential location (everything after " at ", " in ", etc.)
  const locationPatterns = [
    /(?:at|in|live\s+(?:at|in))\s+(.+?)(?:\s+['']?\d{2,4}|\s*$)/i,
    /(?:from|during)\s+(.+?)(?:\s+['']?\d{2,4}|\s*$)/i,
  ];

  let potentialLocation = "";
  for (const pattern of locationPatterns) {
    const match = message.match(pattern);
    if (match && match[1]) {
      potentialLocation = match[1].trim();
      break;
    }
  }

  let bestSong: Song | undefined;
  let bestShow: Show | undefined;
  let confidence = 0;

  // Find best matching song
  if (potentialSongName) {
    const songMatches = context.songs
      .map((song) => ({
        song,
        score: calculateSimilarity(
          potentialSongName.toLowerCase(),
          song.title.toLowerCase(),
        ),
      }))
      .filter((match) => match.score > 0.3) // Minimum threshold
      .sort((a, b) => b.score - a.score);

    if (songMatches.length > 0) {
      bestSong = songMatches[0].song;
      confidence += songMatches[0].score * 0.6; // Song match contributes 60% to confidence
    }
  }

  // Find best matching show
  if (potentialLocation) {
    const showMatches = context.shows
      .map((show) => ({
        show,
        score: calculateLocationSimilarity(
          potentialLocation.toLowerCase(),
          show.location.toLowerCase(),
        ),
      }))
      .filter((match) => match.score > 0.3) // Minimum threshold
      .sort((a, b) => b.score - a.score);

    if (showMatches.length > 0) {
      bestShow = showMatches[0].show;
      confidence += showMatches[0].score * 0.4; // Show match contributes 40% to confidence
    }
  }

  return {
    songId: bestSong?.id,
    showId: bestShow?.id,
    confidence,
  };
}

/**
 * Calculate similarity between two strings using a combination of techniques
 */
function calculateSimilarity(str1: string, str2: string): number {
  // Exact match
  if (str1 === str2) {
    return 1.0;
  }

  // Check if one string contains the other
  if (str1.includes(str2) || str2.includes(str1)) {
    const shorter = str1.length < str2.length ? str1 : str2;
    const longer = str1.length >= str2.length ? str1 : str2;
    return (shorter.length / longer.length) * 0.9;
  }

  // Word-based similarity
  const words1 = str1.split(/\s+/);
  const words2 = str2.split(/\s+/);

  let matchingWords = 0;
  for (const word1 of words1) {
    if (
      word1.length > 2 &&
      words2.some(
        (word2) =>
          word2.includes(word1) ||
          word1.includes(word2) ||
          levenshteinSimilarity(word1, word2) > 0.7,
      )
    ) {
      matchingWords++;
    }
  }

  if (words1.length > 0) {
    return matchingWords / Math.max(words1.length, words2.length);
  }

  return 0;
}

/**
 * Clean up common location suffixes/prefixes
 */
function cleanLocation(loc: string): string {
  return loc
    .replaceAll(
      /\b(the\s+)?(\w+\s+)?(auditorium|arena|theatre|theater|hall|center|centre|club|venue)\b/gi,
      "",
    )
    .replaceAll(/\b(red\s+rocks|red\s+rocks\s+amphitheatre)\b/gi, "red rocks")
    .replaceAll(/\b(new\s+york|nyc|ny)\b/gi, "new york")
    .replaceAll(/\b(los\s+angeles|la|l\.a\.)\b/gi, "los angeles")
    .replaceAll(/\b(san\s+francisco|sf)\b/gi, "san francisco")
    .trim();
}

/**
 * Calculate similarity for locations with special handling for city names
 */
function calculateLocationSimilarity(str1: string, str2: string): number {
  const clean1 = cleanLocation(str1);
  const clean2 = cleanLocation(str2);

  return calculateSimilarity(clean1, clean2);
}

/**
 * Calculate Levenshtein distance similarity between two strings
 */
function levenshteinSimilarity(str1: string, str2: string): number {
  const matrix: number[][] = Array.from({ length: str2.length + 1 }, () =>
    Array.from({ length: str1.length + 1 }, () => 0),
  );

  for (let i = 0; i <= str1.length; i++) {
    matrix[0][i] = i;
  }
  for (let j = 0; j <= str2.length; j++) {
    matrix[j][0] = j;
  }

  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const substitutionCost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // deletion
        matrix[j - 1][i] + 1, // insertion
        matrix[j - 1][i - 1] + substitutionCost, // substitution
      );
    }
  }

  const maxLength = Math.max(str1.length, str2.length);
  return 1 - matrix[str2.length][str1.length] / maxLength;
}
