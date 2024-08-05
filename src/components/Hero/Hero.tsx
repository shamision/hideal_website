"use client"

import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative h-screen w-screen bg-[#402c61] overflow-hidden">
      <div className="relative h-1/3 w-screen pt-32">
        <div className="w-[240px] mx-auto h-[100px] relative overflow-hidden">
          <Image src={"/Logo.png"} fill alt="Logo" />
        </div>

        <div className="h-[100px] 2xl:w-[900px] md:w-[600px] border-[4px] border-[#565b67] rounded-full absolute 2xl:-left-28 2xl:-top-14 md:-left-12 md:-top-14"></div>
        <div className="h-[100px] 2xl:w-[900px] md:w-[600px] border-[4px] border-[#565b67] rounded-full absolute 2xl:-right-28 2xl:-top-14 md:-right-12 md:-top-14"></div>
        <div className="h-[100px] md:w-[500px] 2xl:w-[800px] border-[4px] border-[#565b67] rounded-full absolute 2xl:-left-28 2xl:top-24 md:top-28 md:-left-12"></div>

        <div className="h-[100px] md:w-[500px] 2xl:w-[800px] border-[4px] border-[#565b67] rounded-full absolute 2xl:-right-28 2xl:top-24 md:top-28 md:-right-12"></div>
        <div className="h-[100px] md:w-[500px] 2xl:w-[800px] border-[4px] border-[#565b67] rounded-full absolute 2xl:-right-52 2xl:-bottom-6 md:-bottom-24 md:-right-36 z-30"></div>
        <div className="h-[100px] md:w-[500px] 2xl:w-[800px] border-[4px] border-[#565b67] rounded-full absolute 2xl:-left-52 2xl:-bottom-6 md:-bottom-24 md:-left-36 z-30"></div>
      </div>

      <div
        className="h-2/3 w-screen relative"
        // style={{ backgroundImage: "url(/bg.png)" }}
      >
        <div className="h-full w-full relative overflow-hidden -bottom-16">
          <Image src={"/bg.png"} fill alt="background_image" />
        </div>

        <div className="w-[420px] h-[400px] absolute top-0 right-1/2 translate-x-1/2 z-50">
          <h1 className="text-center text-[50px]">
            <span className="font-bold text-white">
              REAL ESTATE DEVELOPMENT &
            </span>
            <span className="font-thin text-[#8fb463]">
              {" "}
              TECHNOLOGY SOLUTIONS
            </span>
          </h1>
          <div className="w-[80px] h-[70px] mx-auto relative overflow-hidden">
            <Image src={"/three_lines.png"} fill alt="lines" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
