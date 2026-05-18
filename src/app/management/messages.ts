import type { StaffImageOverrides } from "@/types/staff";

type ManagementStaffEntry = StaffImageOverrides & {
  id: string;
  name: string;
  role: string;
  image?: string;
  achievements: string[];
};

export const managementMessages = {
  header: {
    title: "MANAGEMENT",
    year: "2026",
  },
  team: {
    title: "OUR MANAGEMENT",
    subtitle: "Meet the people behind Syrio",
    /** Used when a person has no `image` set */
    defaultImage: "/MULTIMEDIA ASSETS/CLUB/33.png",
  },
  staff: [
    {
      id: "roger",
      name: "ROGER FU",
      role: "PRINCIPAL / HEAD OF MANAGEMENT",
      image: "/MULTIMEDIA ASSETS/CLUB/COACH & MANAGER - ROGER.png",
      achievements: [
        "6+ YRS MANAGEMENT EXPERIENCE",
        "4+ YRS SPORT MANAGEMENT EXPERIENCE",
        "MASTERS OF ARCHITECTURE",
        "DIPLOMA OF BUILDING AND CONSTRUCTION",
      ],
      imageScale: "scale-95 md:scale-100",
    },
    {
      id: "james",
      name: "JAMES CHEN",
      role: "SECRETARY / MEN'S DIVISION 1 TEAM MANAGER",
      image: "/MULTIMEDIA ASSETS/CLUB/Untitled.png",
      achievements: [
        "4+ YRS OF MANAGEMENT EXPERIENCE",
        "2+ YRS SPORT MANAGEMENT EXPERIENCE",
        "BACHELOR OF CIVIL ENGINEERING (HONS) AND ARCHITECTURE",
      ],
      imageScale: "scale-96 md:scale-100",
    },
    {
      id: "jacqueline",
      name: "JACQUELINE WONG",
      role: "SECRETARY / WOMEN'S TEAM MANAGER",
      achievements: [
        "SOCIAL MEDIA MANAGER",
        "BACHELOR OF GEOGRAPHY",
      ],
      /* Fallback image: 33.png (back + smoke) */
      imageScale: "scale-95 md:scale-100",
    },
    {
      id: "hyeonseo",
      name: "HYEONSEO KIM",
      role: "MEN'S DIVISION 2 TEAM MANAGER",
      achievements: [
        "2+ YRS OF SPORTS MANAGEMENT EXPERIENCE",
        "LYNX COLLABORATION MANAGER",
        "BACHELOR OF EDUCATION",
      ],
      /* Fallback: Yao.png — silhouette with side padding */
      imageScale: "scale-115 md:scale-120",
    },
    {
      id: "reeta",
      name: "REETA FU",
      role: "SIRIUS VOLLEYBALL COMP COORDINATOR",
      achievements: [
        "2+ YRS MANAGEMENT EXPERIENCE",
        "MASTERS OF NUTRITION SCIENCE",
      ],
      /* Fallback: 33.png */
      imageScale: "scale-95 md:scale-100",
    },
    {
      id: "coven",
      name: "COVEN ZHANG",
      role: "OPERATION MANAGER",
      image: "/MULTIMEDIA ASSETS/CLUB/MANAGER - COVEN.png",
      achievements: [
        "3+ YRS OF EVENT MANAGEMENT EXPERIENCE",
        "2+ YRS OF SPORTS MANAGEMENT EXPERIENCE",
        "BACHELOR OF EXERCISE PHYSIOLOGY",
      ],
      imageScale: "scale-94 md:scale-98",
    },
  ] as ManagementStaffEntry[],
};
