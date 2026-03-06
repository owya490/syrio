/**
 * Maps pathnames to image URLs to preload during the loading overlay.
 * Used when navigating to reduce lag when the destination page renders.
 */
import { backgroundImages } from "./images";

/** Competition dropdown images – preload on app mount so the overlay opens without lag */
export const NAVBAR_DROPDOWN_PRELOADS = [
  "/WEBSITE MATERIAL/COMPETITION - SVL.jpg",
  "/WEBSITE MATERIAL/COMPETITION - VAL.jpg",
  "/WEBSITE MATERIAL/COMPETITION - SVC.jpg",
  "/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_COMPETITION SVL.png",
  "/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_COMPETITION VAL.png",
  "/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_COMPETITION SVC.png",
] as const;

const ROUTE_PRELOADS: Record<string, string[]> = {
  "/": [
    backgroundImages.homePage,
    backgroundImages.background,
    "/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GOLD ACCENT_SHOP 副本.png",
    "/MULTIMEDIA ASSETS/2025M2/2026 promo.png",
    "/WEBSITE MATERIAL/TEMP HOME PHOTO.png",
    "/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png",
    "/MULTIMEDIA ASSETS/2025M2/图片_20251120021438_448_5.jpg",
    "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
    "/WEBSITE MATERIAL/HOME - COMPETITION.jpg",
    "/WEBSITE MATERIAL/HOME - OPEN SVL.jpg",
  ],
  "/about": [
    backgroundImages.background,
    "/MULTIMEDIA ASSETS/2025M2/图片_20260101211321_642_5.jpg",
    "/WEBSITE MATERIAL/ABOUT - MEET THE TEAM (1).JPG",
  ],
  "/history": [
    backgroundImages.background,
    backgroundImages.highPerformance2,
  ],
  "/sessions": [
    "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
    backgroundImages.background,
    "/MULTIMEDIA ASSETS/2025M2/图片_20251120021438_448_5.jpg",
    "/MULTIMEDIA ASSETS/2025M2/图片_20260101224918_645_5.jpg",
  ],
  "/sessions/intensive-skill-development": [
    backgroundImages.intensiveSkillDevelopment,
    backgroundImages.background,
  ],
  "/coaching": [
    backgroundImages.background,
    "/MULTIMEDIA ASSETS/CLUB/Yao.png",
    "/MULTIMEDIA ASSETS/CLUB/33.png",
  ],
  "/management": [
    "/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png",
    "/MULTIMEDIA ASSETS/CLUB/33.png",
    "/MULTIMEDIA ASSETS/CLUB/Yao.png",
  ],
  "/competition/svl": [
    backgroundImages.svl,
    backgroundImages.highPerformance,
    "/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_SVL_ICONS_SVL.png",
  ],
  "/competition/svl/join": [
    backgroundImages.highPerformance2,
    backgroundImages.highPerformance3,
    "/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_HIGHP2_ICON_HIGHP2.png",
  ],
  "/competition/val": [
    "/WEBSITE MATERIAL/VAL LOGO_画板 1 副本 31.png",
    backgroundImages.background,
    "/WEBSITE MATERIAL/VAL - BIGGER IMAGE ON THE RIGHT OF THE TEXT.jpg",
    "/WEBSITE MATERIAL/VAL - SMALLER IMAGE UNDER THE TEXT.jpg",
  ],
  "/contact": [
    backgroundImages.background,
  ],
  "/shop": [
    backgroundImages.highPerformance2,
  ],
};

/**
 * Returns image URLs to preload for a given pathname.
 * Handles exact matches and dynamic routes (e.g. /event/[id]).
 */
export function getPreloadUrls(pathname: string): string[] {
  const normalized = pathname.replace(/\/$/, "") || "/";

  if (ROUTE_PRELOADS[normalized]) {
    return ROUTE_PRELOADS[normalized];
  }

  if (normalized.startsWith("/event/")) {
    return [
      backgroundImages.highPerformance2,
      backgroundImages.background,
    ];
  }

  return [];
}
