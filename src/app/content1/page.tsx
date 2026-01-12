import LoadingOverlay from "@/components/loading/LoadingOverlay";
import ContentBlockOne from "@/components/modules/content/ContentBlockOne";

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
            // Main image: likely the SVL team photo or graphic
            main: "/MULTIMEDIA ASSETS/2025M2/图片_20260101213227_644_5.jpg",
            // Secondary image: likely a related icon or smaller photo
            secondary:
              "/MULTIMEDIA ASSETS/2025M2/图片_20260101211321_642_5.jpg",
          }}
        />
      </div>
    </>
  );
}
