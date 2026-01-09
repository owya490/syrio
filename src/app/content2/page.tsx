import LoadingOverlay from "@/components/loading/LoadingOverlay";
import ContentBlockTwo from "@/components/modules/content/ContentBlockTwo";

export default function ContentPageTwo() {
  return (
    <>
      <LoadingOverlay />
      <div className="bg-black min-h-screen">
        <ContentBlockTwo
          description="Syrio Volley Academy — Elite volleyball coaching, trials, and high-performance pathways. Join our community and stay updated on trials, programs, and events."
          ctaLabel="UPCOMING EVENTS"
          ctaHref="#"
          images={{
            primary: "/branding/logo.jpg", // Swapped to logo to be distinct
            secondary: "/branding/under-construction-background.png", // Swapped
          }}
        />
      </div>
    </>
  );
}
