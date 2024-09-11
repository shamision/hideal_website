"use client"

import Image from "next/image"

const AboutUs = () => {
  return (
    <section className="bg-white overflow-hidden container">
      <div className="py-8 ">
        <div className="relative w-full md:h-[600px] h-[450px] rounded-[50px] overflow-hidden">
          <Image
            alt="image"
            src={"/img3.jpg"}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 mt-14 gap-[80px] md:px-8 px-0">
          <div className="relative rounded-[32px] md:col-span-4 bg-[#8fc740] pt-12 pl-6 pr-3 pb-4 flex flex-col flex-shrink-0">
            <p className="text-base text-white font-thin">
              HIDEAL INVESTMENT Ltd is a forward-thinking company dedicated to
              revolutionizing the real estate development landscape through
              innovative technology solutions. Operating under the category of
              “Limited by shares,”
              <b>
                {" "}
                we specialize in addressing the burgeoning demand in the real
                estate sector while championing sustainability and eco-friendly
                practices.
              </b>
            </p>

            <p className="text-sm text-white font-thin pt-6">
              Established in Rwanda in 2023
            </p>
            <div className="absolute -top-7 right-1/2 translate-x-1/2 flex items-center -space-x-4">
              <svg
                width={70}
                height={80}
                viewBox="0 0 10 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.3 1L5 5C6.1 5 7.04167 5.39167 7.825 6.175C8.60833 6.95833 9 7.9 9 9C9 10.1 8.60833 11.0417 7.825 11.825C7.04167 12.6083 6.1 13 5 13C3.9 13 2.95833 12.6083 2.175 11.825C1.39167 11.0417 1 10.1 1 9C1 8.61667 1.04583 8.2625 1.1375 7.9375C1.22917 7.6125 1.36667 7.3 1.55 7L5 1H7.3Z"
                  fill="white"
                  stroke="#8FC740"
                  strokeWidth="0.5"
                />
              </svg>

              <svg
                width={70}
                height={80}
                viewBox="0 0 10 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.3 1L5 5C6.1 5 7.04167 5.39167 7.825 6.175C8.60833 6.95833 9 7.9 9 9C9 10.1 8.60833 11.0417 7.825 11.825C7.04167 12.6083 6.1 13 5 13C3.9 13 2.95833 12.6083 2.175 11.825C1.39167 11.0417 1 10.1 1 9C1 8.61667 1.04583 8.2625 1.1375 7.9375C1.22917 7.6125 1.36667 7.3 1.55 7L5 1H7.3Z"
                  fill="white"
                  stroke="#8FC740"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-4 grid md:col-span-8">
            <div className="space-y-4 ">
              <span className="border border-[#8fc740] py-3 px-6 inline-flex flex-shrink-0  rounded-full">
                <h1 className="text-[#44336d] font-medium text-xl">
                  Mission Statement:
                </h1>
              </span>

              <p className="text-[#44336d] text-[14px] font-light">
                At HIDEAL INVESTMENT Ltd, our mission is to redefine the real
                estate industry by integrating cutting-edge technology with
                sustainable development practices. We are committed to
                delivering high-quality, environmentally conscious solutions
                that enhance the lives of our clients and communities.
              </p>
            </div>

            <div className="space-y-4 ">
              <span className="border border-[#8fc740] py-3 px-6 inline-flex flex-shrink-0  rounded-full">
                <h1 className="text-[#44336d] font-medium text-xl">
                  Core Focus:
                </h1>
              </span>

              <p className="text-[#44336d] text-[14px] font-light">
                Our core focus revolves around two key pillars: real estate
                development and technology solutions. By harnessing the power of
                innovation, we strive to create spaces that not only meet the
                evolving needs of modern living but also minimize our ecological
                footprint. Our current emphasis lies in green building
                practices, where we aim to lead the industry in sustainable
                construction methodologies and materials.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12 py-16">
        <div className="relative w-full h-[300px] md:h-[600px]">
          <Image
            alt="image"
            src="/img4.jpg"
            layout="fill"
            objectFit="cover" 
          />
        </div>


        <div className="grid md:grid-cols-5 grid-cols-1 gap-4">
          <div className="md:col-span-2 md:w-[400px] w-full">
            <div className="space-y-4 ">
              <span className="border border-[#8fc740] py-3 md:px-6 px-12 md:flex inline-flex rounded-full">
                <h1 className="text-[#44336d] font-medium text-xl">
                  Expertise:
                </h1>
              </span>

              <p className="text-[#44336d] text-[14px] font-light">
                With a team boasting extensive experience in both real estate
                development and renewable energy, particularly in solar energy
                solutions, HIDEAL INVESTMENT Ltd is uniquely positioned to
                deliver exceptional results. Our collective expertise enables us
                to seamlessly integrate renewable energy solutions into our
                projects, ensuring maximum efficiency and sustainability.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[300px] md:h-full md:col-span-3">
            <Image
              alt="image"
              src="/img8.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>

        </div>

        <div className="space-y-4 ">
          <span className="border border-[#8fc740] py-3 md:px-16 px-4 inline-flex  rounded-full">
            <h1 className="text-[#44336d] font-medium text-xl">
              Commitment to Green Building:
            </h1>
          </span>

          <p className="text-[#44336d] text-[14px] font-light">
            At HIDEAL INVESTMENT Ltd, we are passionate about green building. We
            believe that sustainable construction is not only environmentally
            responsible but also economically viable in the long term. By
            prioritizing energy-efficient designs, renewable energy sources, and
            eco-friendly materials, we strive to minimize our carbon footprint
            while creating spaces that promote health, comfort, and
            well-being.Innovation and Technology:
            <br />
            <br />
            Innovation is at the heart of everything we do. Through continuous
            research and development, we leverage the latest advancements in
            technology to optimize our processes and enhance the quality of our
            projects. From state-of-the-art design software to smart building
            systems, we embrace technology as a catalyst for positive change in
            the built environment.
          </p>
        </div>

        <div className="space-y-4 ">
          <span className="border border-[#8fc740] py-3 md:px-16 px-4 inline-flex  rounded-full">
            <h1 className="text-[#44336d] font-medium text-xl">
              Community Engagement:
            </h1>
          </span>

          <p className="text-[#44336d] text-[14px] font-light">
            Beyond our business objectives, HIDEAL INVESTMENT Ltd is committed
            to making a positive impact on the communities we serve. Through
            partnerships, outreach programs, and community initiatives, we
            actively seek to empower local residents and contribute to
            sustainable development efforts.
          </p>
        </div>

        <div className="space-y-4 ">
          <span className="border border-[#8fc740] py-3 px-16 inline-flex  rounded-full">
            <h1 className="text-[#44336d] font-medium text-xl">Conclusion:</h1>
          </span>

          <p className="text-[#44336d] text-[14px] font-light">
            In a rapidly evolving world, HIDEAL INVESTMENT Ltd stands as a
            beacon of innovation and sustainability in the real estate industry.
            With a steadfast commitment to excellence, integrity, and
            environmental stewardship, we are poised to shape the future of real
            estate development while leaving a lasting legacy for generations to
            come.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
