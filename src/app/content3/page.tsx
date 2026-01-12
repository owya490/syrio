import ContentBlockThree from "@/components/modules/content/ContentBlockThree";

export default function ContentPageThree() {
  return (
    <div className="min-h-screen">
      <ContentBlockThree
        name="YAO"
        role="MENS HEAD COACH PROGRAM DIRECTOR"
        achievements={[
          "15+ YRS CHINA YOUTH NATIONAL COACH",
          "HENGYANG NO.8 HIGHSCHOOL BOYS VOLLEYBALL TEAM HEAD COACH",
          "CHINA NATIONAL HIGH SCHOOL LEAGUE MEDALIST",
        ]}
        imageSrc="/MULTIMEDIA ASSETS/CLUB/Yao.png"
        backgroundImage="/WEBSITE MATERIAL/2026 SYRIO WEBSITE FILE_GENERIC BACKGROUND_ABOUT.png"
        // Fully customized layout via props
        imageScale="scale-110 md:scale-125"
        imageTranslate="translate-y-[-5%] md:translate-y-[-5%] translate-x-[5%] lg:md:translate-x-[15%]"
        boxSize="h-[85%] w-[75%]"
      />
    </div>
  );
}
