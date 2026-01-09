import ContentBlockFour from "@/components/modules/content/ContentBlockFour";
import LoadingOverlay from "@/components/loading/LoadingOverlay";

export default function ContentPageFour() {
  return (
    <>
      <LoadingOverlay />
      <div className="bg-white min-h-screen">
        <ContentBlockFour
          name="ROGER FU"
          role="MENS HEAD COACH PROGRAM DIRECTOR"
          achievements={[
            "15+ YRS CHINA YOUTH NATIONAL COACH",
            "HENGYANG NO.8 HIGHSCHOOL BOYS VOLLEYBALL TEAM HEAD COACH",
            "CHINA NATIONAL HIGH SCHOOL LEAGUE MEDALIST",
          ]}
          imageSrc="/branding/logo.jpg" // Placeholder for Roger's photo
        />
      </div>
    </>
  );
}

