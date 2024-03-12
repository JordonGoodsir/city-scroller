"use client"
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LayersSVG from "./components/LayersSVG";
import PhoneSVG from "./components/PhoneSVG"


const hello = 'hi'

export default function Home() {


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const phoneTL = gsap.timeline()
    // phoneTL.from(".check", {
    //   y: -100, opacity: 0
    // })
    // phoneTL.to(".check", {
    //   scrollTrigger: {
    //     trigger: '#phone', scrub: true, end: 700,
    //   markers: {
    //     startColor: "purple",
    //     endColor: "fuchsia",
    //     fontSize: "4rem",
    //     indent: 100,
    //     fontWeight: "bold",
    //   },
    // }, y: 0, opacity: 1
    // })




    const elements = gsap.utils.toArray('.check');


    gsap.set(elements, { opacity: 0 });
    gsap.from(".skeleton", { opacity: 0, y: -100 });

    gsap.to(".skeleton", { scrollTrigger: { trigger: "#phone", toggleActions: 'play none none reset' }, y: 0, duration: 0.3, opacity: 1, delay: 0.3 })


    elements.forEach((element, index) => {
      //@ts-ignore
      gsap.to(element, { scrollTrigger: { trigger: "#phone", toggleActions: 'play none none reset' }, duration: 0.3, opacity: 1, delay: ((index + 1) * 0.3) + 0.6 })
    })
  }, [])

  // const phoneTL = gsap.timeline()
  // console.error(phoneTL)
  // phoneTL.from('#test', { opacity: 1 })
  // phoneTL.to('#test', { opacity: 0, duration: 5 })

  return (
    // designing svg animaions for lower half of site 

    <main className="flex min-h-screen w-full flex-col items-center overflow-y-auto overflow-x-hidden gap-40 mb-40">

      <div id="test" className="relative w-full h-screen overflow-hidden flex justify-center xl:flex xl:items-end bg-[#225E92]">

        <div className="w-full h-[265px] hidden xl:block z-50 bg-[url('/assets/images/longCloudFullWhite.png')] no-repeat absolute bottom-0" />
        <div className="relative max-w-screen-xl h-screen w-full flex items-end justify-between xl:grow xl:basis-auto">

          <h1 className="absolute text-6xl left-1/2 z-50 -translate-x-[50%] top-1/3 md:text-8xl font-black text-white">Building</h1>

          {/* buildings */}
          <div className="absolute hidden md:block left-0 z-20 top-1/2">

            <img className="" src="/assets/images/building4.png" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>


          <img className="absolute hidden xl:block left-[25%]" src="/assets/images/building1.png" />


          <div className="absolute hidden md:block left-[36.5%] bottom-[17%] z-20">
            <img className="md:z-10" src="/assets/images/building5.png" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>

          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 md:bottom-1/4">
            <img className="mb-0" src="/assets/images/building2.png" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>

          <div className="absolute hidden md:block left-[52%] bottom-[19%]">
            <img className="md:z-10" src="/assets/images/building5.png" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>


          <img className="absolute hidden xl:block left-[60%]" src="/assets/images/building1.png" />

          <div className="absolute right-0 mb-20 md:z-10">
            <img className="md:z-10" src="/assets/images/building3.png" />
            <div className="absolute bg-[#0B416C] w-full h-full top-[100%]" />
          </div>

          <div className="w-full mb-5 hidden md:block absolute bottom-0 h-[216px] bg-[url('/assets/images/building1.png')]  bg-repeat" />



          {/* // clouds */}

          <img className="absolute top-[30%] z-20 right-0" src="/assets/images/separate-clouds.png" />

          <div className="absolute w-full md:w-[1280px] bottom-0 overflow-visible z-20">
            <img className="absolute bottom-0 2xl:-bottom-[8%] z-10 w-full" src="/assets/images/coverCloud.png" />
            <img className="z-20 w-full" src="/assets/images/longCloudFullWhite.png" />
          </div>


        </div>
        <div className="bg-white h-[50px] z-50 absolute bottom-0 w-full" />



      </div>

      {/* min-h-[700px] */}

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
