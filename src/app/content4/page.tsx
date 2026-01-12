import LoadingOverlay from "@/components/loading/LoadingOverlay";
import ContentBlockFour from "@/components/modules/content/ContentBlockFour";

export default function ContentPageFour() {
  return (
    <>
      <LoadingOverlay />
      <div className="min-h-screen">
        <ContentBlockFour
          name="ROGER FU"
          role="MENS HEAD COACH PROGRAM DIRECTOR"
          achievements={[
            "15+ YRS CHINA YOUTH NATIONAL COACH",
            "HENGYANG NO.8 HIGHSCHOOL BOYS VOLLEYBALL TEAM HEAD COACH",
            "CHINA NATIONAL HIGH SCHOOL LEAGUE MEDALIST",
          ]}
          imageSrc="/MULTIMEDIA ASSETS/CLUB/33.png"
          // Fully customized layout via props
          // Setting base scale to 85 (mobile) and 95 for md+ (desktop)
          imageScale="scale-85 md:scale-95"
          // IMPORTANT: translate-y-[5%] pushes image DOWN to align with bottom on ALL screens
          imageTranslate="translate-y-[5%] md:translate-y-[5%] translate-x-[3%] lg:md:translate-x-[-15%]"
          boxSize="h-[85%] w-[75%]"
        />
      </div>
    </>
  );
}
