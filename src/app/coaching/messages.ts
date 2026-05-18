import type { StaffImageOverrides } from "@/types/staff";

type CoachingStaffEntry = StaffImageOverrides & {
  id: string;
  name: string;
  role: string;
  image?: string;
  achievements: string[];
};

export const coachingMessages = {
  header: {
    title: "COACHING STAFF",
    year: "2026",
    /** Short line under the title on /coaching */
    lead:
      "From junior pathways to high performance — our coaches bring national and international experience to every session.",
    images: {
      yao: {
        src: "/MULTIMEDIA ASSETS/CLUB/Yao.png",
        alt: "Yao",
      },
      roger: {
        src: "/MULTIMEDIA ASSETS/CLUB/33.png",
        alt: "Roger",
      },
    },
  },
  coaches: {
    title: "OUR COACHES",
    subtitle: "Meet our coaching team",
    /** Used when a person has no `image` set */
    defaultImage: "/MULTIMEDIA ASSETS/CLUB/33.png",
  },
  // Optional per coach: imageScale, imageTranslate (profile blocks). Card strip uses uniform frames in CardModule.
  staff: [
    {
      id: "roger",
      name: "ROGER",
      role: "HEAD PROGRAM DIRECTOR / WOMEN'S HEAD COACH",
      image: "/MULTIMEDIA ASSETS/CLUB/COACH & MANAGER - ROGER.png",
      achievements: [
        "4+ YRS VOLLEYBALL PROGRAM DIRECTOR",
        "6+ YRS VOLLEYBALL COACHING",
        "VOLLEYBALL AUSTRALIA LEVEL 2 COACHING CERTIFICATE",
        "SVL 2025 SYRIO MEN'S MEDALIST",
        "SVL 2026 SYRIO MEN'S VICE CAPTAIN",
      ],
      imageScale: "scale-95 md:scale-100",
    },
    {
      id: "yang",
      name: "YANG",
      role: "MEN'S HEAD COACH",
      image: "/MULTIMEDIA ASSETS/CLUB/COACH - YANG.png",
      achievements: [
        "30+ YRS MEN'S VOLLEYBALL COACHING",
        "15+ YRS CHINA YOUTH NATIONAL COACH",
        "2021-2024 CHINA NATIONAL HIGH SCHOOL LEAGUE MEDALIST",
      ],
      imageScale: "scale-95 md:scale-100",
    },
    {
      id: "yao",
      name: "YAO",
      role: "WOMEN'S PROGRAM COORDINATOR",
      image: "/MULTIMEDIA ASSETS/CLUB/COACH - YAO.png",
      achievements: [
        "CHINESE NATIONAL UNIVERSITY LEAGUE SETTER",
        "CHINA NATIONAL FIRST-CLASS VOLLEYBALL ATHLETE",
        "2+ YRS VOLLEYBALL COACHING",
        "SVL 2025 WOMEN'S MEDALIST",
        "GOODNEIGHBOUR 2025 WOMEN'S MEDALIST",
      ],
      imageScale: "scale-115 md:scale-120",
    },
    {
      id: "james",
      name: "JAMES",
      role: "MEN'S PROGRAM COORDINATOR",
      image: "/MULTIMEDIA ASSETS/CLUB/Untitled.png",
      achievements: [
        "2+ YRS VOLLEYBALL PROGRAM COORDINATOR",
        "3+ YRS VOLLEYBALL COACHING",
        "VOLLEYBALL AUSTRALIA LEVEL 2 COACHING CERTIFICATE",
        "SVL 2025 SYRIO MEN'S MEDALIST",
        "SVL 2026 SYRIO MEN'S CAPTAIN",
      ],
      imageScale: "scale-96 md:scale-100",
    },
    {
      id: "prince",
      name: "PRINCE",
      role: "REGIONAL 1 ON 1 COACH",
      image: "/MULTIMEDIA ASSETS/CLUB/COACH - PRINCE.png",
      achievements: [
        "CHINA NATIONAL FIRST-CLASS VOLLEYBALL ATHLETE",
        "CHINESE NATIONAL UNIVERSITY LEAGUE OUTSIDE HITTER",
        "2+ YRS VOLLEYBALL COACHING",
        "VOLLEYBALL AUSTRALIA LEVEL 1 COACHING CERTIFICATE",
      ],
      imageScale: "scale-92 md:scale-96",
    },
    {
      id: "yuan",
      name: "YUAN",
      role: "REGIONAL 1 ON 1 COACH",
      image: "/MULTIMEDIA ASSETS/CLUB/COACH - YUAN.png",
      achievements: [
        "CHINA NATIONAL FIRST-CLASS VOLLEYBALL ATHLETE",
        "CHINESE PROVINCIAL HIGH SCHOOL LEAGUE LIBERO",
        "2+ YRS VOLLEYBALL COACHING",
        "VOLLEYBALL AUSTRALIA LEVEL 1 COACHING CERTIFICATE",
      ],
      imageScale: "scale-118 md:scale-125",
    },
    {
      id: "shaohan",
      name: "SHAOHAN",
      role: "YOUTH HEAD COACH",
      image: "/MULTIMEDIA ASSETS/CLUB/COACH - SHAOHAN.png",
      achievements: [
        "2+ YRS VOLLEYBALL COACHING",
        "VOLLEYBALL AUSTRALIA LEVEL 2 COACHING CERTIFICATE",
        "SVL 2026 SYRIO MEN'S OUTSIDE HITTER",
      ],
      imageScale: "scale-100 md:scale-105",
    },
    {
      id: "chris",
      name: "CHRIS",
      role: "YOUTH COACH",
      image: "/MULTIMEDIA ASSETS/CLUB/COACH - CHRIS.png",
      achievements: [
        "3+ YRS VOLLEYBALL COACHING",
        "VOLLEYBALL AUSTRALIA LEVEL 2 COACHING CERTIFICATE",
        "SVL 2025 SYRIO MEN'S MEDALIST",
      ],
      imageScale: "scale-94 md:scale-98",
    },
    {
      id: "jeremy",
      name: "JEREMY",
      role: "HIGH PERFORMANCE COACH",
      image: "/MULTIMEDIA ASSETS/CLUB/COACH - JEREMY.png",
      achievements: [
        "2+ YRS VOLLEYBALL COACHING",
        "VOLLEYBALL AUSTRALIA LEVEL 1 COACHING CERTIFICATE",
        "SVL 2026 SYRIO MEN'S OUTSIDE HITTER",
      ],
      imageScale: "scale-92 md:scale-96",
    },
    {
      id: "ollie",
      name: "OLLIE",
      role: "HIGH PERFORMANCE COACH",
      achievements: [
        "2+ YRS VOLLEYBALL COACHING",
        "VOLLEYBALL AUSTRALIA LEVEL 1 COACHING CERTIFICATE",
        "SVL 2026 SYRIO MEN'S OPPOSITE HITTER",
      ],
      imageScale: "scale-115 md:scale-120",
    },
  ] as CoachingStaffEntry[],
};
