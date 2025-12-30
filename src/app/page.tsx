import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen bg-black">
      <Image
        src="/branding/under-construction-background.png"
        alt="Background"
        fill
        priority
        className="object-cover opacity-100"
      />
      <div className="relative z-10 flex w-full items-end justify-center pb-8">
        <p className="text-sm font-light tracking-wide text-white">
          UNDER CONSTRUCTION | SYRIO.COM.AU
        </p>
      </div>
    </div>
  );
}
