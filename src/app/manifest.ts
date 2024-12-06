import type { MetadataRoute } from "next";

import tailwindConfig from "@/../tailwind.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Live Gizz Rankings",
    short_name: "Live Gizz Rankings",
    description: "Finding King Gizzard's best live performances",
    start_url: "/",
    display: "standalone",
    background_color: tailwindConfig.theme.extend.colors.background,
    theme_color: tailwindConfig.theme.extend.colors.background,
    icons: [
      {
        src: "/icon.png",
      },
    ],
  };
}
