"use client"
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


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

    console.error('ello')



  }, [])

  // const phoneTL = gsap.timeline()
  // console.error(phoneTL)
  // phoneTL.from('#test', { opacity: 1 })
  // phoneTL.to('#test', { opacity: 0, duration: 5 })

  return (
    // designing svg animaions for lower half of site 

    <main className="flex min-h-screen w-full flex-col items-center justify-between overflow-auto">

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

      <div id="phone" className="min-h-[700px]">
        <svg className="w-[200px]" width="383" height="820" viewBox="0 0 383 820" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="phone" filter="url(#filter0_d_1533_500)">
            <g clipPath="url(#clip0_1533_500)">
              <rect x="4" width="375" height="812" rx="50" fill="#ECF0F3" />
              <g id="Contents">
                <g className="skeleton" clipPath="url(#clip1_1533_500)">
                  <g id="Frame" clipPath="url(#clip2_1533_500)">
                    <g id="Frame_2">
                      <circle id="Ellipse" cx="71.5" cy="267.5" r="22.5" fill="#D1D5DB" />
                      <path id="Union" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M244 258.992H109V261.992H244V258.992ZM214 273.008H109V276.008H214V273.008Z" fill="#D1D5DB" />
                    </g>
                    <circle id="Ellipse 2" cx="319" cy="267.5" r="14" stroke="#D1D5DB" strokeWidth="2" />
                    <g className="check">
                      <circle id="Ellipse 1" cx="318.5" cy="267.5" r="14.5" fill="#0B416C" stroke="#0B416C" strokeWidth="2" />
                      <g id="Approve">
                        <path d="M325.434 262.55C325.338 262.453 325.223 262.377 325.097 262.324C324.971 262.272 324.836 262.245 324.7 262.245C324.564 262.245 324.429 262.272 324.303 262.324C324.177 262.377 324.062 262.453 323.966 262.55L316.268 270.259L313.034 267.014C312.934 266.918 312.816 266.842 312.687 266.791C312.558 266.74 312.42 266.716 312.282 266.718C312.143 266.72 312.006 266.75 311.879 266.805C311.752 266.861 311.637 266.94 311.541 267.04C311.444 267.14 311.368 267.258 311.318 267.387C311.267 267.516 311.242 267.653 311.244 267.792C311.247 267.931 311.276 268.068 311.332 268.195C311.387 268.322 311.467 268.437 311.566 268.533L315.534 272.501C315.63 272.598 315.745 272.675 315.871 272.727C315.997 272.78 316.132 272.807 316.268 272.807C316.404 272.807 316.539 272.78 316.665 272.727C316.791 272.675 316.906 272.598 317.002 272.501L325.434 264.069C325.539 263.973 325.622 263.855 325.68 263.724C325.737 263.594 325.766 263.452 325.766 263.31C325.766 263.167 325.737 263.026 325.68 262.895C325.622 262.764 325.539 262.647 325.434 262.55Z" fill="white" />
                      </g>
                    </g>
                  </g>
                  <g id="Frame_3" clipPath="url(#clip3_1533_500)">
                    <g id="Frame_4">
                      <circle id="Ellipse_2" cx="71.5" cy="337.5" r="22.5" fill="#D1D5DB" />
                      <path id="Union_2" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M244 328.992H109V331.992H244V328.992ZM214 343.008H109V346.008H214V343.008Z" fill="#D1D5DB" />
                    </g>
                    <circle id="Ellipse 2_2" cx="319" cy="337.5" r="14" stroke="#D1D5DB" strokeWidth="2" />
                    <g className="check">
                      <circle id="Ellipse 1_2" cx="318.5" cy="337.5" r="14.5" fill="#0B416C" stroke="#0B416C" strokeWidth="2" />
                      <g id="Approve_2">
                        <path d="M325.434 332.55C325.338 332.453 325.223 332.377 325.097 332.324C324.971 332.272 324.836 332.245 324.7 332.245C324.564 332.245 324.429 332.272 324.303 332.324C324.177 332.377 324.062 332.453 323.966 332.55L316.268 340.259L313.034 337.014C312.934 336.918 312.816 336.842 312.687 336.791C312.558 336.74 312.42 336.716 312.282 336.718C312.143 336.72 312.006 336.75 311.879 336.805C311.752 336.861 311.637 336.94 311.541 337.04C311.444 337.14 311.368 337.258 311.318 337.387C311.267 337.516 311.242 337.653 311.244 337.792C311.247 337.931 311.276 338.068 311.332 338.195C311.387 338.322 311.467 338.437 311.566 338.533L315.534 342.501C315.63 342.598 315.745 342.675 315.871 342.727C315.997 342.78 316.132 342.807 316.268 342.807C316.404 342.807 316.539 342.78 316.665 342.727C316.791 342.675 316.906 342.598 317.002 342.501L325.434 334.069C325.539 333.973 325.622 333.855 325.68 333.724C325.737 333.594 325.766 333.452 325.766 333.31C325.766 333.167 325.737 333.026 325.68 332.895C325.622 332.764 325.539 332.647 325.434 332.55Z" fill="white" />
                      </g>
                    </g>
                  </g>
                  <g id="Frame_5" clipPath="url(#clip4_1533_500)">
                    <g id="Frame_6">
                      <circle id="Ellipse_3" cx="71.5" cy="407.5" r="22.5" fill="#D1D5DB" />
                      <path id="Union_3" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M244 398.992H109V401.992H244V398.992ZM214 413.008H109V416.008H214V413.008Z" fill="#D1D5DB" />
                    </g>
                    <circle id="Ellipse 2_3" cx="319" cy="407.5" r="14" stroke="#D1D5DB" strokeWidth="2" />
                    <g className="check">
                      <circle id="Ellipse 1_3" cx="318.5" cy="407.5" r="14.5" fill="#0B416C" stroke="#0B416C" strokeWidth="2" />
                      <g id="Approve_3">
                        <path d="M325.434 402.551C325.338 402.454 325.223 402.377 325.097 402.324C324.971 402.272 324.836 402.245 324.7 402.245C324.564 402.245 324.429 402.272 324.303 402.324C324.177 402.377 324.062 402.454 323.966 402.551L316.268 410.259L313.034 407.015C312.934 406.918 312.816 406.842 312.687 406.792C312.558 406.741 312.42 406.716 312.282 406.718C312.143 406.721 312.006 406.75 311.879 406.806C311.752 406.861 311.637 406.941 311.541 407.04C311.444 407.14 311.368 407.258 311.318 407.387C311.267 407.516 311.242 407.654 311.244 407.792C311.247 407.931 311.276 408.068 311.332 408.195C311.387 408.322 311.467 408.437 311.566 408.534L315.534 412.502C315.63 412.598 315.745 412.675 315.871 412.728C315.997 412.78 316.132 412.807 316.268 412.807C316.404 412.807 316.539 412.78 316.665 412.728C316.791 412.675 316.906 412.598 317.002 412.502L325.434 404.07C325.539 403.973 325.622 403.855 325.68 403.725C325.737 403.594 325.766 403.453 325.766 403.31C325.766 403.167 325.737 403.026 325.68 402.895C325.622 402.765 325.539 402.647 325.434 402.551Z" fill="white" />
                      </g>
                    </g>
                  </g>
                  <g id="Frame_7" clipPath="url(#clip5_1533_500)">
                    <g id="Frame_8">
                      <circle id="Ellipse_4" cx="71.5" cy="477.5" r="22.5" fill="#D1D5DB" />
                      <path id="Union_4" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M244 468.992H109V471.992H244V468.992ZM214 483.008H109V486.008H214V483.008Z" fill="#D1D5DB" />
                    </g>
                    <circle id="Ellipse 2_4" cx="319" cy="477.5" r="14" stroke="#D1D5DB" strokeWidth="2" />
                    <g className="check">
                      <circle id="Ellipse 1_4" cx="318.5" cy="477.5" r="14.5" fill="#0B416C" stroke="#0B416C" strokeWidth="2" />
                      <g id="Approve_4">
                        <path d="M325.434 472.551C325.338 472.454 325.223 472.377 325.097 472.324C324.971 472.272 324.836 472.245 324.7 472.245C324.564 472.245 324.429 472.272 324.303 472.324C324.177 472.377 324.062 472.454 323.966 472.551L316.268 480.259L313.034 477.015C312.934 476.918 312.816 476.842 312.687 476.792C312.558 476.741 312.42 476.716 312.282 476.718C312.143 476.721 312.006 476.75 311.879 476.806C311.752 476.861 311.637 476.941 311.541 477.04C311.444 477.14 311.368 477.258 311.318 477.387C311.267 477.516 311.242 477.654 311.244 477.792C311.247 477.931 311.276 478.068 311.332 478.195C311.387 478.322 311.467 478.437 311.566 478.534L315.534 482.502C315.63 482.598 315.745 482.675 315.871 482.728C315.997 482.78 316.132 482.807 316.268 482.807C316.404 482.807 316.539 482.78 316.665 482.728C316.791 482.675 316.906 482.598 317.002 482.502L325.434 474.07C325.539 473.973 325.622 473.855 325.68 473.725C325.737 473.594 325.766 473.453 325.766 473.31C325.766 473.167 325.737 473.026 325.68 472.895C325.622 472.765 325.539 472.647 325.434 472.551Z" fill="white" />
                      </g>
                    </g>
                  </g>
                  <g id="Frame_9" clipPath="url(#clip6_1533_500)">
                    <g id="Frame_10">
                      <circle id="Ellipse_5" cx="71.5" cy="547.5" r="22.5" fill="#D1D5DB" />
                      <path id="Union_5" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M244 538.992H109V541.992H244V538.992ZM214 553.008H109V556.008H214V553.008Z" fill="#D1D5DB" />
                    </g>
                    <circle id="Ellipse 2_5" cx="319" cy="547.5" r="14" stroke="#D1D5DB" strokeWidth="2" />
                    <g className="check">
                      <circle id="Ellipse 1_5" cx="318.5" cy="547.5" r="14.5" fill="#0B416C" stroke="#0B416C" strokeWidth="2" />
                      <g id="Approve_5">
                        <path d="M325.434 542.551C325.338 542.454 325.223 542.377 325.097 542.324C324.971 542.272 324.836 542.245 324.7 542.245C324.564 542.245 324.429 542.272 324.303 542.324C324.177 542.377 324.062 542.454 323.966 542.551L316.268 550.259L313.034 547.015C312.934 546.918 312.816 546.842 312.687 546.792C312.558 546.741 312.42 546.716 312.282 546.718C312.143 546.721 312.006 546.75 311.879 546.806C311.752 546.861 311.637 546.941 311.541 547.04C311.444 547.14 311.368 547.258 311.318 547.387C311.267 547.516 311.242 547.654 311.244 547.792C311.247 547.931 311.276 548.068 311.332 548.195C311.387 548.322 311.467 548.437 311.566 548.534L315.534 552.502C315.63 552.598 315.745 552.675 315.871 552.728C315.997 552.78 316.132 552.807 316.268 552.807C316.404 552.807 316.539 552.78 316.665 552.728C316.791 552.675 316.906 552.598 317.002 552.502L325.434 544.07C325.539 543.973 325.622 543.855 325.68 543.725C325.737 543.594 325.766 543.453 325.766 543.31C325.766 543.167 325.737 543.026 325.68 542.895C325.622 542.765 325.539 542.647 325.434 542.551Z" fill="white" />
                      </g>
                    </g>
                  </g>
                  <g id="Frame_11" clipPath="url(#clip7_1533_500)">
                    <g id="Frame_12">
                      <circle id="Ellipse_6" cx="71.5" cy="617.5" r="22.5" fill="#D1D5DB" />
                      <path id="Union_6" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M244 608.992H109V611.992H244V608.992ZM214 623.008H109V626.008H214V623.008Z" fill="#D1D5DB" />
                    </g>
                    <circle id="Ellipse 2_6" cx="319" cy="617.5" r="14" stroke="#D1D5DB" strokeWidth="2" />
                    <g className="check">
                      <circle id="Ellipse 1_6" cx="318.5" cy="617.5" r="14.5" fill="#0B416C" stroke="#0B416C" strokeWidth="2" />
                      <g id="Approve_6">
                        <path d="M325.434 612.551C325.338 612.454 325.223 612.377 325.097 612.324C324.971 612.272 324.836 612.245 324.7 612.245C324.564 612.245 324.429 612.272 324.303 612.324C324.177 612.377 324.062 612.454 323.966 612.551L316.268 620.259L313.034 617.015C312.934 616.918 312.816 616.842 312.687 616.792C312.558 616.741 312.42 616.716 312.282 616.718C312.143 616.721 312.006 616.75 311.879 616.806C311.752 616.861 311.637 616.941 311.541 617.04C311.444 617.14 311.368 617.258 311.318 617.387C311.267 617.516 311.242 617.654 311.244 617.792C311.247 617.931 311.276 618.068 311.332 618.195C311.387 618.322 311.467 618.437 311.566 618.534L315.534 622.502C315.63 622.598 315.745 622.675 315.871 622.728C315.997 622.78 316.132 622.807 316.268 622.807C316.404 622.807 316.539 622.78 316.665 622.728C316.791 622.675 316.906 622.598 317.002 622.502L325.434 614.07C325.539 613.973 325.622 613.855 325.68 613.725C325.737 613.594 325.766 613.453 325.766 613.31C325.766 613.167 325.737 613.026 325.68 612.895C325.622 612.765 325.539 612.647 325.434 612.551Z" fill="white" />
                      </g>
                    </g>
                  </g>
                </g>
                <g className="skeleton" clipPath="url(#clip8_1533_500)">
                  <rect id="Rectangle" x="44" y="125" width="75" height="75" rx="20" fill="#D1D5DB" />
                  <rect id="Rectangle_2" x="149" y="125" width="75" height="75" rx="20" fill="#D1D5DB" />
                  <rect id="Rectangle_3" x="254" y="125" width="75" height="75" rx="20" fill="#D1D5DB" />
                </g>
                <g className="skeleton">
                  <rect id="Rectangle_4" opacity="0.5" x="49" y="80" width="135" height="5" fill="#D1D5DB" />
                  <rect id="Rectangle_5" opacity="0.5" x="49" y="95" width="105" height="5" fill="#D1D5DB" />
                </g>
                <rect className="skeleton" x="49" y="685" width="285" height="61" rx="16" fill="#D1D5DB" />
                <g className="check">
                  <rect id="Rectangle 69" x="49" y="685" width="285" height="61" rx="16" fill="#0B416C" />
                  <path d="M186.917 727.474C186.373 727.474 185.841 727.636 185.389 727.939C184.937 728.243 184.584 728.675 184.376 729.179C184.168 729.684 184.113 730.24 184.22 730.776C184.326 731.312 184.588 731.804 184.972 732.191C185.357 732.577 185.847 732.84 186.38 732.947C186.914 733.054 187.467 732.999 187.969 732.79C188.472 732.581 188.901 732.226 189.203 731.772C189.505 731.318 189.667 730.783 189.667 730.237C189.667 729.504 189.377 728.801 188.861 728.283C188.345 727.765 187.646 727.474 186.917 727.474ZM206.167 721.947H184.167C183.68 721.947 183.214 721.753 182.87 721.408C182.526 721.062 182.333 720.594 182.333 720.105C182.333 719.617 182.526 719.148 182.87 718.803C183.214 718.457 183.68 718.263 184.167 718.263H199.734C200.928 718.259 202.089 717.867 203.043 717.144C203.996 716.421 204.691 715.408 205.023 714.255L207.929 704.033C208.007 703.759 208.021 703.47 207.969 703.19C207.917 702.909 207.801 702.645 207.63 702.417C207.459 702.19 207.238 702.005 206.984 701.878C206.73 701.75 206.45 701.684 206.167 701.684H183.688C183.309 700.611 182.609 699.681 181.685 699.022C180.76 698.363 179.656 698.006 178.523 698H176.833C176.347 698 175.881 698.194 175.537 698.54C175.193 698.885 175 699.354 175 699.842C175 700.331 175.193 700.799 175.537 701.145C175.881 701.49 176.347 701.684 176.833 701.684H178.523C178.921 701.686 179.307 701.817 179.625 702.057C179.943 702.298 180.174 702.636 180.285 703.02L180.57 704.023L180.571 704.033L183.579 714.61C182.179 714.762 180.89 715.446 179.978 716.524C179.066 717.601 178.599 718.989 178.675 720.401C178.75 721.813 179.361 723.143 180.383 724.116C181.405 725.089 182.759 725.632 184.167 725.632H206.167C206.653 725.632 207.119 725.438 207.463 725.092C207.807 724.747 208 724.278 208 723.789C208 723.301 207.807 722.832 207.463 722.487C207.119 722.141 206.653 721.947 206.167 721.947ZM203.736 705.368L201.497 713.242C201.387 713.627 201.155 713.965 200.837 714.206C200.519 714.447 200.132 714.578 199.734 714.579H187.383L186.916 712.935L184.765 705.368H203.736ZM201.583 727.474C201.039 727.474 200.508 727.636 200.056 727.939C199.603 728.243 199.251 728.675 199.043 729.179C198.835 729.684 198.78 730.24 198.886 730.776C198.992 731.312 199.254 731.804 199.639 732.191C200.023 732.577 200.513 732.84 201.047 732.947C201.58 733.054 202.133 732.999 202.636 732.79C203.138 732.581 203.568 732.226 203.87 731.772C204.172 731.318 204.333 730.783 204.333 730.237C204.333 729.504 204.044 728.801 203.528 728.283C203.012 727.765 202.313 727.474 201.583 727.474Z" fill="white" />
                </g>
              </g>
            </g>
            <rect x="5" y="1" width="373" height="810" rx="49" stroke="#D1D5DB" strokeWidth="2" />
          </g>
          <defs>
            <filter id="filter0_d_1533_500" x="0" y="0" width="383" height="820" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1533_500" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1533_500" result="shape" />
            </filter>
            <clipPath id="clip0_1533_500">
              <rect x="4" width="375" height="812" rx="50" fill="white" />
            </clipPath>
            <clipPath id="clip1_1533_500">
              <rect width="285" height="395" fill="white" transform="translate(49 245)" />
            </clipPath>
            <clipPath id="clip2_1533_500">
              <rect width="285" height="45" fill="white" transform="translate(49 245)" />
            </clipPath>
            <clipPath id="clip3_1533_500">
              <rect width="285" height="45" fill="white" transform="translate(49 315)" />
            </clipPath>
            <clipPath id="clip4_1533_500">
              <rect width="285" height="45" fill="white" transform="translate(49 385)" />
            </clipPath>
            <clipPath id="clip5_1533_500">
              <rect width="285" height="45" fill="white" transform="translate(49 455)" />
            </clipPath>
            <clipPath id="clip6_1533_500">
              <rect width="285" height="45" fill="white" transform="translate(49 525)" />
            </clipPath>
            <clipPath id="clip7_1533_500">
              <rect width="285" height="45" fill="white" transform="translate(49 595)" />
            </clipPath>
            <clipPath id="clip8_1533_500">
              <rect width="285" height="75" fill="white" transform="translate(44 125)" />
            </clipPath>
          </defs>
        </svg>




      </div>

      <div id="stack" className="min-h-[700px]">

        <svg width="294" height="75" viewBox="0 0 294 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="rectangularPrism">
            <path id="Bottom" d="M292.545 55.6647L146.772 37.4431L1 55.6647L146.772 73.8862L292.545 55.6647Z" fill="#4D4D4D" stroke="#0B416C" stroke-miterlimit="1" />
            <path id="Back" d="M292.545 55.6647L146.772 37.4431V1L292.545 19.2216V55.6647Z" fill="#999999" stroke="#0B416C" stroke-miterlimit="1" />
            <path id="Left" d="M146.772 37.4431L1 55.6647V19.2216L146.772 1V37.4431Z" fill="#999999" stroke="#0B416C" stroke-miterlimit="1" />
            <path id="Front" d="M146.772 73.8861L1 55.6645V19.2214L146.772 37.443V73.8861Z" fill="#E5E7EB" stroke="#0B416C" stroke-miterlimit="1" />
            <path id="Right" d="M146.772 73.8861L292.545 55.6645V19.2214L146.772 37.443V73.8861Z" fill="#E5E7EB" stroke="#0B416C" stroke-miterlimit="1" />
            <path id="Top" d="M292.545 19.2216L146.772 1L1 19.2216L146.772 37.4431L292.545 19.2216Z" fill="#E5E7EB" stroke="#0B416C" stroke-miterlimit="1" />
          </g>
        </svg>
      </div>

    </main>
  );
}
