import Image from "next/image";

const hello = 'hi'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between bg-[#225E92] overflow-auto">

      <div className="relative w-full h-screen overflow-hidden flex justify-center">
        <div className="relative max-w-screen-xl h-screen w-full">

          <div className="absolute w-[1280px] bottom-0 overflow-visible">
            <img className="absolute bottom-0 2xl:-bottom-[8%] z-10" src="/assets/images/coverCloud.png" />
            <img className="z-20" src="/assets/images/longCloud.png" />
          </div>


        </div>
      </div>

      below





    </main>
  );
}
