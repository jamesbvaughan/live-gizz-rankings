import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Live Gizz Rankings",
    short_name: "Live Gizz Rankings",
    description: "Finding King Gizzard's best live performances",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0a09",
    theme_color: "#0c0a09",
    icons: [
      {
        src: "/icon.png",
      },
    ],
  };
}
