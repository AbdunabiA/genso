import WrapperContainer from '@/app/wrapperContainer'
import React from 'react'
import PrimaryButtonLink from './ui/primaryButtonLink';
import Image from 'next/image';
import port1 from "@/assets/images/portfolio1.png";
import port2 from "@/assets/images/Portfolio2.png";
import port3 from "@/assets/images/Portfolio3.png";
import port4 from "@/assets/images/Portfolio4.png";
import port5 from "@/assets/images/Portfolio5.png";

const PortfolioSection = () => {
  return (
    <WrapperContainer>
      <div className="mt-4 md:mt-10">
        <p className="text-[24px] leading-relaxed md:w-[500px] md:text-[34px] lg:text-[50px] lg:w-[900px] lg:leading-[50px]">
          Вы можете ознакомиться с нашим
          <span className="text-primaryGreen">портфолио</span>
        </p>
        <p className="lg:text-[20px] lg:w-[500px] lg:leading-[27px] text-[14px] mt-4 lg:mt-10 leading-relaxed md:mt-6 md:text-base md:w-[350px]">
          Познакомьтесь с нашими проектами по созданию уникальных брендов,
          впечатляющих веб-сайтов и эффективных SMM-стратегий, которые помогли
          нашим клиентам выделиться и расти.
        </p>
      </div>

      <div>
        <div className="flex items-end gap-2 md:gap-12 mt-5 md:mt-10">
          <div>
            <Image src={port1} alt="img" />
          </div>
          <div>
            <Image src={port2} alt="img" />
          </div>
          <div>
            <Image src={port3} alt="img" />
          </div>
        </div>
        <div className="flex items-end md:gap-12 gap-4 mt-5 lg:mt-24 md:mt-14">
          <div>
            <Image src={port4} alt="img" />
          </div>
          <div>
            <Image src={port5} alt="img" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-3 items-center mt-6 ">
        <p className="text-[26px] lg:text-[40px] lg:w-[650px]">
          Это всего лишь малая часть наших
          <span className="text-primaryGreen"> работ</span>
        </p>
        <PrimaryButtonLink
          title="Портфолио"
          to=""
          className="text-[20px] lg:text-[26px]"
        />
      </div>
    </WrapperContainer>
  );
}

export default PortfolioSection