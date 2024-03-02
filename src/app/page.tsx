import Image from "next/image";

const hello = 'hi'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between overflow-auto">

      <div className="relative w-full h-screen overflow-hidden flex justify-center bg-[#225E92]">
        <div className="relative max-w-screen-xl h-screen w-full flex items-end justify-between">
          <div className="absolute hidden md:block right-0 mb-20 md:z-10">

            <img className="md:z-10" src="/assets/images/building3.png" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />

          </div>
          {/* <img className="absolute hidden md:block left-0 w-[265px] h-[546px]" src="/assets/images/building1.png" /> */}

          <div className="absolute hidden md:block left-0 top-1/2">

            <img className="" src="/assets/images/building4.png" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />

          </div>


          <img className="absolute hidden xl:block left-[25%] w-[103] h-[211]" src="/assets/images/building1.png" />
          <img className="absolute hidden xl:block left-[60%] w-[103] h-[211]" src="/assets/images/building1.png" />



          {/* tall building */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 md:bottom-1/4">
            <img className="mb-0 scale-125" src="/assets/images/building2.png" />
            <div className="absolute bg-[#0B416C] w-full h-full scale-125 top-[124%]" />
          </div>

          {/* #0B416C */}
          {/* need building bottoms */}


          {/* 2 clouds */}
          <img className="absolute top-[43%] z-20 left-1/2 -translate-x-[50%] md:scale-75 md:left-0 md:translate-x-0" src="/assets/images/separate-clouds.png" />

          <h1 className="absolute text-6xl left-1/2 -translate-x-[50%] top-1/3 md:text-8xl font-black text-white">Building</h1>



          <div className="absolute w-full md:w-[1280px] bottom-0 overflow-visible z-20">
            <img className="absolute bottom-0 2xl:-bottom-[8%] z-10 w-full" src="/assets/images/coverCloud.png" />
            <img className="z-20 w-full" src="/assets/images/longCloud.png" />
          </div>


        </div>
      </div>

      below





    </main>
  );
}
