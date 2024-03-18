"use client"
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/all";
import LayersSVG from "./components/LayersSVG";
import PhoneSVG from "./components/PhoneSVG"
import TextSVG from "./components/TextSVG";


export default function Home() {


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin)


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
    sceneTL.fromTo('.svg-text', { y: 0 }, { y: 50 }, 0)


  }, [])

  return (
    // designing svg animaions for lower half of site 

    <main className="flex min-h-screen w-full flex-col items-center overflow-y-auto overflow-x-hidden gap-32 mb-8">

      <div id="scene" className="relative flex-col w-full h-screen items-center overflow-hidden flex xl:flex xl:justify-end bg-[#225E92]">

        {/* <div className="w-full h-[265px] hidden xl:block z-50 bg-[url('/assets/images/longCloudFullWhite.png')] no-repeat absolute bottom-0" /> */}
        <div className="relative max-w-screen-xl h-full overflow-hidden w-full flex items-end justify-between xl:grow xl:basis-auto">

          <TextSVG />

          {/* buildings */}
          <div id="left-building" className="absolute hidden md:block left-0 z-20 top-1/2">
            <img className="" src="/assets/images/building4.png" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>


          <img className="absolute hidden xl:block left-[25%]" src="/assets/images/building1.png" />


          {/* <div id="center-cluster"> */}
          <div id="left-center-building" className="absolute hidden md:block left-[36.5%] bottom-[17%] z-20">
            <img className="md:z-10" src="/assets/images/building5.png" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>

          <div id="center-building" className="absolute left-0 md:left-1/2 md:-translate-x-1/2 md:bottom-1/4">
            <img className="mb-0" src="/assets/images/building2.png" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>

          <div id="right-center-building" className="absolute hidden md:block left-[52%] bottom-[19%]">
            <img className="md:z-10" src="/assets/images/building5.png" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>
          {/* </div> */}


          <img className="absolute hidden xl:block left-[60%]" src="/assets/images/building1.png" />

          <div id="right-building" className="absolute right-0 mb-20 md:z-10">
            <img className="md:z-10" src="/assets/images/building3.png" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>

          <div className="w-full mb-5 hidden md:block absolute bottom-0 h-[216px] bg-[url('/assets/images/building1.png')]  bg-repeat" />



          {/* // clouds */}

          <img id="separate-clouds" className="absolute top-[30%] z-20 right-0" src="/assets/images/separate-clouds.png" />

          <div className="absolute w-full md:w-[1280px] bottom-0 overflow-visible z-20">
            <img id="misty-cloud" className="absolute bottom-0 2xl:-bottom-[8%] z-10 w-full" src="/assets/images/coverCloud.png" />
            <img id="cover-cloud" className="z-20 w-full" src="/assets/images/longCloudFullWhite.png" />
          </div>


        </div>
        <div id="white-backdrop" className="w-full z-40">
          <div className="bg-white h-[100px] w-full" />
          <div className="bg-white z-50 w-full h-screen absolute top-full" />
        </div>
      </div>



      <div id="phone" className="flex-col md:flex-row flex gap-16 items-center max-w-screen-xl">

        <div className="w-[375px] flex justify-center">
          <PhoneSVG />
        </div>

        <p className="md:max-w-[32rem] px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus erat, non semper mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi dictum elit a odio ornare, sit amet bibendum augue congue. Praesent at augue nisl. Integer ut augue tempor, semper sapien quis, tincidunt arcu. Praesent tincidunt ligula a ipsum luctus dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

          Donec interdum erat auctor, commodo nisl a, consectetur felis. Nulla sollicitudin odio a risus finibus interdum. Ut congue turpis in nisi aliquam, nec feugiat dolor vestibulum. Aenean ornare nisl velit, id porta augue ullamcorper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non libero ut mi efficitur sagittis nec nec lorem. Nunc maximus tempor massa sit amet ornare. Mauris a dui ac libero mollis aliquet eget pulvinar orci. Fusce eu elit elementum, laoreet ligula at, hendrerit lacus. Aliquam ut gravida dui, in faucibus ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque at molestie ligula. Nam eu convallis velit. Fusce et pellentesque mauris.
        </p>
      </div>

      <div id="layers" className="flex-col md:flex-row flex gap-16 items-center max-w-screen-xl">
        <div className="md:order-2">
          <LayersSVG />
        </div>

        <p className="md:order-1 md:max-w-[32rem] px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae finibus erat, non semper mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi dictum elit a odio ornare, sit amet bibendum augue congue. Praesent at augue nisl. Integer ut augue tempor, semper sapien quis, tincidunt arcu. Praesent tincidunt ligula a ipsum luctus dignissim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

          Donec interdum erat auctor, commodo nisl a, consectetur felis. Nulla sollicitudin odio a risus finibus interdum. Ut congue turpis in nisi aliquam, nec feugiat dolor vestibulum. Aenean ornare nisl velit, id porta augue ullamcorper eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non libero ut mi efficitur sagittis nec nec lorem. Nunc maximus tempor massa sit amet ornare. Mauris a dui ac libero mollis aliquet eget pulvinar orci. Fusce eu elit elementum, laoreet ligula at, hendrerit lacus. Aliquam ut gravida dui, in faucibus ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque at molestie ligula. Nam eu convallis velit. Fusce et pellentesque mauris.
        </p>
      </div>

    </main>
  );
}
