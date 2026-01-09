import ContentBlockThree from "@/components/modules/content/ContentBlockThree";
import LoadingOverlay from "@/components/loading/LoadingOverlay";

export default function ContentPageThree() {
  return (
    <>
      <LoadingOverlay />
      <div className="bg-zinc-950 min-h-screen">
        <ContentBlockThree
          name="YAO"
          role="MENS HEAD COACH PROGRAM DIRECTOR"
          achievements={[
            "15+ YRS CHINA YOUTH NATIONAL COACH",
            "HENGYANG NO.8 HIGHSCHOOL BOYS VOLLEYBALL TEAM HEAD COACH",
            "CHINA NATIONAL HIGH SCHOOL LEAGUE MEDALIST",
          ]}
          imageSrc="/branding/under-construction-background.png" // Placeholder for Yao's photo
        />
      </div>
    </>
  );
}

