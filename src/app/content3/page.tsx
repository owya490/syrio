import ContentBlockProfile from "@/components/modules/content/ContentBlockProfile";
import LoadingOverlay from "@/components/loading/LoadingOverlay";

export default function ContentPageThree() {
  return (
    <>
      <LoadingOverlay />
      <div className="bg-zinc-950 min-h-screen">
        <ContentBlockProfile
          theme="dark"
          alignment="image-right"
          name="YAO"
          role="MENS HEAD COACH PROGRAM DIRECTOR"
          achievements={[
            "15+ YRS CHINA YOUTH NATIONAL COACH",
            "HENGYANG NO.8 HIGHSCHOOL BOYS VOLLEYBALL TEAM HEAD COACH",
            "CHINA NATIONAL HIGH SCHOOL LEAGUE MEDALIST",
          ]}
          imageSrc="/branding/logo.jpg" // Placeholder
          // backgroundImage removed as requested
        />
      </div>
    </>
  );
}
