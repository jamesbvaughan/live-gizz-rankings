function createNonagonSVG(
  centerX,
  centerY,
  radius,
  lineThickness,
  numSides = 9,
) {
  const vertices = [];

  // Calculate the vertices of the nonagon
  for (let i = 0; i < numSides; i++) {
    const angle = ((2 * Math.PI) / numSides) * i - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    vertices.push({ x, y });
  }

  // Create lines connecting all vertices
  let lines = "";
  for (let i = 0; i < numSides - 1; i++) {
    for (let j = i + 1; j < numSides; j++) {
      const start = vertices[i];
      const end = vertices[j];
      lines += `<line x1="${start.x}" y1="${start.y}" x2="${end.x}" y2="${end.y}" stroke="red" stroke-width="${lineThickness}" />\n`;
    }
  }

  // Wrap lines in an SVG element
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${2 * centerX} ${2 * centerY}">
  ${lines}
</svg>
  `;

  return svg.trim();
}

console.log(createNonagonSVG(1000, 1000, 500, 2));
