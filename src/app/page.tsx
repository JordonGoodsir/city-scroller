import Image from "next/image";

const hello = 'hi'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#225E92]">
      doggie
      <div className="flex relative w-full h-screen">
        {/* lightbulb idea, put the crane in */}
        {/* cut up some svgs for the bg and figma work shopped it */}
        {/* <Image className="absolute bottom-[60px]" src="/assets/images/wave.svg" alt="buildings" width="1280" height="300" /> */}
        <div>
        </div>

        <div>
        </div>



        <Image className="absolute bottom-0 w-full z-10" src="/assets/images/cloud1.webp" alt="buildings" width="1280" height="300" style={{ objectFit: "cover" }} />
        <Image className="absolute w-full bottom-0" src="/assets/images/cloud3.png" alt="buildings" width="1280" height="300" style={{ objectFit: "cover" }} />
      </div>



    </main>
  );
}
