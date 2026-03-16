import { links } from "@/config/links";

export const navigation = {
  menu: {
    open: "MENU",
    close: "CLOSE",
  },
  navigationTabs: [
    {
      english: "SESSIONS",
      chinese: "SESSIONS",
      route: "/sessions/intensive-skill-development",
    },
    {
      english: "COMPETITION",
      chinese: "COMPETITION",
      route: "/competition",
      subNav: [
        {
          logo: "WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_COMPETITION SVL.png",
          image: "/WEBSITE MATERIAL/COMPETITION - SVL.jpg",
          route: "/competition/svl",
        },
        {
          logo: "WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_COMPETITION VAL.png",
          image: "/WEBSITE MATERIAL/COMPETITION - VAL.jpg",
          route: "/competition/val",
        },
        {
          logo: "WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_COMPETITION SVC.png",
          image: "/WEBSITE MATERIAL/COMPETITION - SVC.jpg",
          route: links.forms.svcRegistration,
        },
      ],
    },
    // { english: "SHOP", chinese: "SHOP", route: "/shop" },
    { english: "ABOUT", chinese: "ABOUT", route: "/about" },
    { english: "HISTORY", chinese: "HISTORY", route: "/history" },
    { english: "NEWS", chinese: "NEWS", route: links.social.instagram },
  ],

  tagline: "SYDNEY'S PREMIER VOLLEYBALL ACADEMY",
};
