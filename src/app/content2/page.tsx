import ContentBlockTwo from "@/components/modules/content/ContentBlockTwo";

export default function ContentPageTwo() {
  return (
    <div className="min-h-screen">
      <ContentBlockTwo
        description="Syrio Volley Academy — Elite volleyball coaching, trials, and high-performance pathways. Join our community and stay updated on trials, programs, and events."
        ctaLabel="UPCOMING EVENTS"
        ctaHref="#"
        backgroundImage="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
        images={{
          // Primary: Large landscape image (e.g. general about/team photo)
          primary: "/MULTIMEDIA ASSETS/2025M2/图片_20251120021438_448_5.jpg",
          // Secondary: Vertical/smaller image (e.g. generic background or logo)
          // Updated to use the specific action shot requested:
          secondary: "/MULTIMEDIA ASSETS/2025M2/DSC_0535.jpg",
        }}
      />
    </div>
  );
}
