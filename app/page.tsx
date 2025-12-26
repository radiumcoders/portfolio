import Conainer from "@/components/core/container";
import Image from "next/image";

export default function Page() {
  return (
    <Conainer className="flex-1">
      <HeroText />
    </Conainer>
  );
}

function HeroImage() {
  return (
    <div>
      <Image className="size-18 -translate-x-4 rounded-full border-border border-2 " src={"/avatar.jpg"} alt="Avatar" width={100} height={100} />
    </div>
  );
}

function HeroText() {
  return (
    <div className="flex flex-col gap-4 items-start justify-start p-12">
      <HeroImage />
      <div className="text-center flex gap-4 items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">HI, I'm Jay</h1>
        <p className="text-lg text-primary/90"> - A FullStack Web Developer</p>
      </div>
    </div>
  );
}
