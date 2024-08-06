"use client"

import Image from "next/image"

const Footer = () => {
  return (
    <section className="relative bg-[#402c61] overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center  border border-[#8fc740] w-[600px] aspect-square mt-20 rounded-full">
          <div className="border border-[#8fc740] w-[480px] aspect-square rounded-full text-white flex flex-col alig justify-center items-center font-thin">
            <div className="w-[240px] mx-auto h-[100px] relative overflow-hidden">
              <Image src={"/Logo.png"} fill alt="Logo" />
            </div>
            <p className="pt-3">Kigali - Rwanda</p>
            <p>KN .55 KG 676 st</p>
            <p>Kimihurura, Gasabo</p>
          </div>
        </div>
        <div className="border border-[#8fc740] w-[700px] h-[60px] mt-12 rounded-full"></div>
        <div className="border border-[#8fc740] w-[500px] h-[60px] mt-12  rounded-full"></div>
        <div className="border border-[#8fc740] w-[300px] h-[60px] mt-12 mb-20 rounded-full"></div>
      </div>
    </section>
  )
}

export default Footer
