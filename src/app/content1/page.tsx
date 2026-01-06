import ContentBlockOne from "@/components/modules/content/ContentBlockOne";
import LoadingOverlay from "@/components/loading/LoadingOverlay";

export default function ContentPageOne() {
  return (
    <>
      <LoadingOverlay />
      <div className="bg-black min-h-screen">
        <ContentBlockOne
          subtitle="DIVISION 1"
          title="MENS SVL 2026"
          features={[
            "15+ YRS CHINA YOUTH NATIONAL COACH",
            "HENGYANG NO.8 HIGHSCHOOL BOYS VOLLEYBALL TEAM HEAD COACH",
            "CHINA NATIONAL HIGH SCHOOL LEAGUE MEDALIST",
          ]}
          ctaLabel="ENQUIRE MORE"
          ctaHref="#"
          images={{
            main: "/branding/under-construction-background.png", // Using existing placeholder
            secondary: "/branding/logo.jpg", // Using existing placeholder
          }}
        />
      </div>
    </>
  );
}
