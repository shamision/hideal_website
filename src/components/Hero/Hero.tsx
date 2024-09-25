"use client"

import Image from "next/image"

const Hero = () => {
  return (
    <section className="relative h-screen w-screen bg-[#402c61] overflow-hidden">
      <div className="relative h-1/3 w-screen md:pt-32 pt-12">
        <div className="relative w-[240px] h-[100px] mx-auto overflow-hidden">
          <Image
            src="/Logo.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        <div className="md:block hidden h-[100px] 2xl:w-[700px]  xl:w-[600px]  md:w-[400px] border-[4px] border-[#565b67] rounded-full absolute 2xl:-left-28 2xl:-top-14 md:-left-12 left-0 md:-top-14"></div>

        <div className="md:block hidden h-[100px] 2xl:w-[700px] xl:w-[600px] md:w-[400px] border-[4px] border-[#565b67] rounded-full absolute 2xl:-right-28 2xl:-top-14 md:-right-12 md:-top-14"></div>

        <div className="md:block hidden h-[100px] xl:w-[500px] md:w-[300px] 2xl:w-[600px] border-[4px] border-[#565b67] rounded-full absolute 2xl:-left-28 2xl:top-24 md:top-28 md:-left-12"></div>

        <div className="md:block hidden h-[100px] 2xl:w-[600px] xl:w-[500px] md:w-[300px] border-[4px] border-[#565b67] rounded-full absolute 2xl:-right-28 2xl:top-24 md:top-28 md:-right-12"></div>

        <div className="md:block hidden h-[100px] xl:w-[500px] md:w-[300px]  2xl:w-[600px] border-[4px] border-[#565b67] rounded-full absolute 2xl:-right-52 2xl:top-[250px] md:top-[270px] xl:top-[270px] md:-right-36 z-30"></div>

        <div className="md:block hidden h-[100px] xl:w-[500px] md:w-[300px] 2xl:w-[600px] border-[4px] border-[#565b67] rounded-full xl:top-[270px] absolute 2xl:top-[250px] 2xl:-left-52 md:top-[270px] md:-left-36 z-30"></div>
      </div>

      <div
        className="h-2/3 w-screen relative"
        // style={{ backgroundImage: "url(/bg.png)" }}
      >
        <div className="h-full w-full relative overflow-hidden -bottom-16">
          <Image src={"/bg.png"} fill alt="background_image" />
        </div>

        <div className="w-[420px] h-[400px] absolute top-0 right-1/2 translate-x-1/2 z-50">
          <h1 className="text-center md:text-[50px] text-[40px]">
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
    </section>
  )
}

export default Hero
