/**
 * Session Event Types
 * 
 * These types are designed to be easily replaceable with backend API calls.
 * Simply replace the stub data fetching with your API endpoint.
 */

export interface SessionEvent {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  price: number;
  capacity: number;
  vacancy: number;
  image?: string;
  thumbnail?: string;
}

/**
 * Stub function to fetch session events
 * 
 * TODO: Replace this with actual API call
 * Example:
 * ```typescript
 * export async function fetchSessionEvents(): Promise<SessionEvent[]> {
 *   const response = await fetch('/api/sessions/intensive-skill-development');
 *   return response.json();
 * }
 * ```
 */
export function fetchSessionEvents(): Promise<SessionEvent[]> {
  // Stub data - replace with actual API call
  // Dates are set to be in the future from current date
  const today = new Date();
  
  // Helper function to create dates relative to today
  const createDate = (daysFromToday: number, hours: number, minutes: number = 0) => {
    const date = new Date(today);
    date.setDate(today.getDate() + daysFromToday);
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  return Promise.resolve([
    {
      id: "1",
      name: "Advanced Spiking Techniques",
      description: "Master advanced spiking techniques and power hitting. This intensive session focuses on improving your attack game with professional coaching on approach, timing, and power generation.",
      startDate: createDate(7, 10),
      endDate: createDate(7, 12),
      location: "Syrio Volley Academy - Court 1",
      price: 50,
      capacity: 20,
      vacancy: 15,
      image: "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
      thumbnail: "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
    },
    {
      id: "2",
      name: "Defensive Positioning Workshop",
      description: "Learn proper defensive positioning and court awareness. Develop your defensive skills through drills and game scenarios that improve your reaction time and court coverage.",
      startDate: createDate(14, 14),
      endDate: createDate(14, 16),
      location: "Syrio Volley Academy - Court 2",
      price: 50,
      capacity: 20,
      vacancy: 8,
      image: "/MULTIMEDIA ASSETS/2025M2/图片_20260101224918_645_5.jpg",
      thumbnail: "/MULTIMEDIA ASSETS/2025M2/图片_20260101224918_645_5.jpg",
    },
    {
      id: "3",
      name: "Serving Masterclass",
      description: "Perfect your serve technique and power. This session covers jump serves, float serves, and strategic placement to give you a competitive edge.",
      startDate: createDate(21, 10),
      endDate: createDate(21, 12),
      location: "Syrio Volley Academy - Court 1",
      price: 50,
      capacity: 20,
      vacancy: 20,
      image: "/MULTIMEDIA ASSETS/2025W2/图片_20260101210429_640_5.jpg",
      thumbnail: "/MULTIMEDIA ASSETS/2025W2/图片_20260101210429_640_5.jpg",
    },
    {
      id: "4",
      name: "Blocking Fundamentals",
      description: "Master the art of blocking with proper footwork, timing, and hand positioning. Learn to read attackers and execute effective blocks.",
      startDate: createDate(7, 14),
      endDate: createDate(7, 16),
      location: "Syrio Volley Academy - Court 1",
      price: 50,
      capacity: 20,
      vacancy: 12,
      image: "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
      thumbnail: "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
    },
    {
      id: "5",
      name: "Setting Precision Training",
      description: "Improve your setting accuracy and decision-making. Work on hand positioning, ball control, and quick decision-making under pressure.",
      startDate: createDate(14, 10),
      endDate: createDate(14, 12),
      location: "Syrio Volley Academy - Court 2",
      price: 50,
      capacity: 20,
      vacancy: 5,
      image: "/MULTIMEDIA ASSETS/2025W2/图片_20260101210429_640_5.jpg",
      thumbnail: "/MULTIMEDIA ASSETS/2025W2/图片_20260101210429_640_5.jpg",
    },
    {
      id: "6",
      name: "All-Round Skills Intensive",
      description: "A comprehensive session covering all aspects of volleyball. Perfect for players looking to improve their overall game with balanced training across all positions.",
      startDate: createDate(21, 14),
      endDate: createDate(21, 17),
      location: "Syrio Volley Academy - Court 1",
      price: 75,
      capacity: 20,
      vacancy: 18,
      image: "/MULTIMEDIA ASSETS/2025M2/图片_20260101224918_645_5.jpg",
      thumbnail: "/MULTIMEDIA ASSETS/2025M2/图片_20260101224918_645_5.jpg",
    },
  ]);
}