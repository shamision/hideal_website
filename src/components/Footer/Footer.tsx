"use client"

import Image from "next/image"

const Footer = () => {
  return (
    <section className="relative bg-[#402c61] overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center  border border-[#8fc740] md:w-[500px] w-[370px] aspect-square mt-20 rounded-full">
          <div className="border border-[#8fc740] md:w-[380px] w-[280px] aspect-square rounded-full text-white flex flex-col alig justify-center items-center font-thin">
            <div className="md:w-[240px] w-[180px] mx-auto md:h-[100px] h-[100px] relative overflow-hidden">
              <Image src={"/Logo.png"} fill alt="Logo" />
            </div>
            <p className="pt-3">Kigali - Rwanda</p>
            <p>KN .55 KG 676 st</p>
            <p>Kimihurura, Gasabo</p>
          </div>
        </div>
        <div className="border border-[#8fc740] md:w-[600px] w-full h-[60px] mt-12 rounded-full"></div>
        <div className="border border-[#8fc740] md:w-[400px] w-[350px] h-[60px] mt-12  rounded-full"></div>
        <div className="border border-[#8fc740] md:w-[200px] w-[250px] h-[60px] mt-12 mb-20 rounded-full"></div>
      </div>
    </section>
  )
}

export default Footer
