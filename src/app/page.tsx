"use client"
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LayersSVG from "./components/LayersSVG";
import PhoneSVG from "./components/PhoneSVG"
import TextSVG from "./components/TextSVG";

// completed more codewars challenges and practiced for interview

export default function Home() {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    const sceneTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#scene", scrub: 1, start: "top top",
        end: "bottom center"
      }
    })

    sceneTL.fromTo('#center-building', { y: 0 }, { y: -550 }, 0)
    sceneTL.fromTo('#left-center-building', { y: 0 }, { y: -550 }, 0)
    sceneTL.fromTo('#right-center-building', { y: 0 }, { y: -550 }, 0)
    sceneTL.fromTo('#cloud1', { y: 300 }, { y: -800 }, 0)
    sceneTL.fromTo('#left-building', { y: 0 }, { y: -220 }, 0)
    sceneTL.fromTo('#right-building', { y: 0 }, { y: -90 }, 0)
    sceneTL.fromTo('#cover-cloud', { y: 80 }, { y: -800 }, 0)
    sceneTL.fromTo('#white-backdrop', { y: 0 }, { y: -800 }, 0)
    sceneTL.fromTo('#misty-cloud', { y: 50 }, { y: -600 }, 0)
    sceneTL.fromTo('#separate-clouds', { y: 0 }, { y: -500 }, 0)

    sceneTL.fromTo('.svg-text', { y: 0 }, { y: 400 }, 0)
  }, [])

  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-y-auto overflow-x-hidden mb-8">

      <div id="scene" className="relative flex-col w-full h-screen items-center overflow-hidden flex xl:flex xl:justify-end bg-[#225E92]">

        {/* <div className="w-full h-[265px] hidden xl:block z-50 bg-[url('/assets/images/longCloudFullWhite.webp')] no-repeat absolute bottom-0" /> */}
        <div className="relative max-w-screen-xl h-full overflow-hidden w-full flex items-end justify-between xl:grow xl:basis-auto">

          <TextSVG />

          {/* buildings */}
          <div id="left-building" className="absolute hidden md:block left-0 z-20 top-1/2">
            <img className="" src="/assets/images/building4.webp" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>


          <img className="absolute hidden xl:block left-[25%]" src="/assets/images/building1.webp" />


          <div id="left-center-building" className="absolute hidden md:block left-[36.5%] bottom-[17%] z-20">
            <img className="md:z-10" src="/assets/images/building5.webp" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>

          <div id="center-building" className="absolute left-0 md:left-1/2 md:-translate-x-1/2 md:bottom-1/4">
            <img className="mb-0" src="/assets/images/building2.webp" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>

          <div id="right-center-building" className="absolute hidden md:block left-[52%] bottom-[19%]">
            <img className="md:z-10" src="/assets/images/building5.webp" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>


          <img className="absolute hidden xl:block left-[60%]" src="/assets/images/building1.webp" />

          <div id="right-building" className="absolute right-0 mb-20 md:z-10">
            <img className="md:z-10" src="/assets/images/building3.webp" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>

          <div className="w-full mb-5 hidden md:block absolute bottom-0 h-[216px] bg-[url('/assets/images/building1.webp')]  bg-repeat" />

          {/* // clouds */}

          <img id="separate-clouds" className="absolute top-[30%] z-20 right-0" src="/assets/images/separate-clouds.webp" />

          <div className="absolute w-full w-[1280px] bottom-0 overflow-visible z-20">
            <img id="misty-cloud" className="absolute bottom-0 2xl:-bottom-[8%] z-10 w-full" src="/assets/images/coverCloud.webp" />
            <img id="cover-cloud" className="z-20" src="/assets/images/longCloudFullWhite.webp" />
          </div>


        </div>
        <div id="white-backdrop" className="w-full z-40 -mb-px">
          <div className="bg-white h-[101px] w-full -mb-px" />
          <div className="bg-white z-50 w-full h-[200vh] absolute top-full" />
        </div>
      </div>

      <div className="flex flex-col gap-10 items-center md:gap-0 md:flex-row md:justify-between w-full mt-[100px] mb-[200px] max-w-screen-xl">
        <img alt="TypeScripts logo" src="/assets/images/logos/TSLogo.webp" className="h-[58px] w-[219px]" />
        <img alt="Next.JS's logo" src="/assets/images/logos/NextLogo.webp" className="h-[58px] w-[219px]" />
        <img alt="GSAP's logo" src="/assets/images/logos/GSAP.webp" className="h-[58px] w-[219px]" />
      </div>


    <div className="text-6xl font-bold flex justify-start w-full text-[#162a43] mb-16 px-8 items-center max-w-screen-xl">My Motivations</div>

      <article id="phone" className="flex-col md:flex-row flex gap-16 items-center max-w-screen-xl mb-32">

        <div className=" w-[375px] flex justify-center">
          <PhoneSVG />
        </div>

        <div className="md:max-w-[32rem] px-8 flex flex-col gap-5">
          <div className="text-4xl font-bold text-[#162a43]">Fast to production</div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus erat, non semper mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi dictum elit a odio ornare, sit amet bibendum augue congue. Praesent at augue nisl. Integer ut augue tempor, semper sapien quis, tincidunt arcu. Praesent tincidunt ligula a ipsum luctus dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

            Donec interdum erat auctor, commodo nisl a, consectetur felis. Nulla sollicitudin odio a risus finibus interdum.
          </p>
        </div>
      </article>

      <article id="layers" className="flex-col md:flex-row flex gap-16 items-center max-w-screen-xl">
        <div className="md:order-2">
          <LayersSVG />
        </div>

        <div className="md:order-1 md:max-w-[32rem] px-8 flex flex-col gap-5">
          <div className="text-4xl font-bold text-[#162a43]">Things I look for</div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus erat, non semper mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi dictum elit a odio ornare, sit amet bibendum augue congue. Praesent at augue nisl. Integer ut augue tempor, semper sapien quis, tincidunt arcu. Praesent tincidunt ligula a ipsum luctus dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

            Donec interdum erat auctor, commodo nisl a, consectetur felis. Nulla sollicitudin odio a risus finibus interdum.
          </p>
        </div>
      </article>

    </main>
  );
}
