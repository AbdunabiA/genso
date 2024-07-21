import Image from "next/image";
import bg from "@/assets/images/header-bg.png";
import logo from "@/assets/logo/logoFull.png";
import port1 from "@/assets/images/portfolio1.png";
import port2 from "@/assets/images/Portfolio2.png";
import port3 from "@/assets/images/Portfolio3.png";
import port4 from "@/assets/images/Portfolio4.png";
import port5 from "@/assets/images/Portfolio5.png";
import WrapperContainer from "./wrapperContainer";

const stats = [
  {
    primary: "3 Года",
    secondary: "Опыт на рынке",
  },
  {
    primary: "Более 50",
    secondary: "Контрактов",
  },
  {
    primary: "Более 4",
    secondary: "Професионалов",
  },
  {
    primary: "Лучший",
    secondary: "Выбор",
  },
];

export default function Home() {
  return (
    <main className="text-white">
      <div className="relative">
        <Image
          src={bg}
          alt="bg"
          priority
          className="absolute object-cover w-full h-full z-[-1]"
        />
        <WrapperContainer>
          <div className="flex flex-col md:flex-row items-center lg:gap-[92px] gap-[50px] lg:pt-[83px] pt-[60px] pb-[130px]">
            <div className="w-full flex justify-center">
              <Image
                src={logo}
                alt="logo"
                priority
                className="lg:w-[498px] w-[80%]"
              />
            </div>
            <div className="w-full">
              <p className="lg:w-[624px] lg:px-0 px-5 lg:py-14 py-8 backdrop-blur-sm lg:text-[28px] text-center font-semibold">
                Добро пожаловать в <span className="text-primaryGreen">G</span>
                enso – маркетинговое агентство и дизайн студию. Мы создаем
                уникальные бренды, впечатляющие веб-сайты и эффективные
                SMM-стратегии, чтобы ваш бизнес выделялся и рос.
              </p>
            </div>
          </div>
        </WrapperContainer>
      </div>

      {/* ABOUT */}

      <WrapperContainer>
        <div className="my-10 lg:my-14 flex-wrap gap-6 flex gap-y-3 justify-between items-center px-5 lg:px-16 text-primaryBlack bg-primaryGreen lg:py-11 py-5 rounded-[20px]">
          {stats.map((stat) => {
            return (
              <div key={stat.secondary}>
                <p className="lg:text-[35px] text-[22px] font-semibold text-center">
                  {stat.primary}
                </p>
                <p className="text-center lg:text-[22px]">{stat.secondary}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-4 md:mt-10">
          <p className="text-[24px] leading-relaxed md:w-[500px] md:text-[34px] lg:text-[60px] lg:w-[900px] lg:leading-[60px]">
            Вы можете ознакомиться с нашим{" "}
            <span className="text-primaryGreen">портфолио</span>
          </p>
          <p className="lg:text-[22px] lg:w-[500px] lg:leading-[27px] text-[14px] mt-4 lg:mt-10 leading-relaxed md:mt-6 md:text-base md:w-[350px]">
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
      </WrapperContainer>
    </main>
  );
}
