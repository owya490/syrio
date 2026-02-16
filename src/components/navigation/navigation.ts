export const navigation = {
  menu: {
    open: "MENU",
    close: "CLOSE",
  },
  navigationTabs: [
    {
      english: "SESSIONS",
      chinese: "SESSIONS",
      route: "https://www.sportshub.net.au/user/tihrtHXNCKVkYpmJIVijKDWkkvq2",
    },
    {
      english: "COMPETITION",
      chinese: "COMPETITION",
      route: "/competition",
      subNav: [
        {
          logo: "WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_COMPETITION SVL.png",
          image: "/MULTIMEDIA ASSETS/2025M2/图片_20260101213147_643_5.jpg",
          route: "/competition/svl",
        },
        {
          logo: "WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_COMPETITION VAL.png",
          image: "/MULTIMEDIA ASSETS/2025M2/图片_20260101213227_644_5.jpg",
          route: "/competition/val",
        },
      ],
    },
    { english: "SHOP", chinese: "SHOP", route: "/shop" },
    { english: "ABOUT", chinese: "ABOUT", route: "/about" },
    { english: "HISTORY", chinese: "HISTORY", route: "/history" },
  ],

  tagline: "SYDNEY'S PREMIER VOLLEYBALL ACADEMY",
};
