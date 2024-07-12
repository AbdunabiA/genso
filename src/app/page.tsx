import Image from "next/image";
import Link from "next/link";
import bg from '@/assets/images/header-bg.png'
import logo from '@/assets/logo/logoFull.png'

export default function Home() {
  return (
    <main className="text-white">
      <div className="relative">
        <Image src={bg} alt="bg" priority={true} className="absolute object-cover w-full h-full z-[-1]"/>
        <div className="container mx-auto max-w-[1200px] px-5">
          <div className="flex flex-col md:flex-row items-center lg:gap-[92px] gap-[50px] lg:pt-[83px] pt-[60px] pb-[130px]">
            <div className="w-full flex justify-center">
              <Image src={logo} alt="logo" className="lg:w-[498px] w-[80%]" />
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
        </div>
      </div>
    </main>
  );
}
