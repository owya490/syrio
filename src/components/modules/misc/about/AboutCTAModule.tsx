import CTAButton from "@/components/elements/CTAButton";
import Module from "@/components/modules/Module";

interface AboutCTAModuleProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function AboutCTAModule({
  title,
  description,
  buttonText,
  buttonHref,
}: AboutCTAModuleProps) {
  return (
    <Module
      className="py-20 bg-syrio-black border-t border-syrio-blue/30"
      contentClassName="px-4 md:px-8"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-bank-gothic text-3xl md:text-4xl tracking-wider mb-6">
          {title}
        </h2>
        <p className="font-montserrat text-syrio-white/80 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <CTAButton href={buttonHref}>{buttonText}</CTAButton>
      </div>
    </Module>
  );
}
