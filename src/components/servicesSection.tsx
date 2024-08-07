import WrapperContainer from "@/app/wrapperContainer";
import img1 from "@/assets/images/1.1.png";
import img2 from "@/assets/images/2.1.png";
import img3 from "@/assets/images/3.png";
import img4 from "@/assets/images/4.png";
import img5 from "@/assets/images/5.png";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <WrapperContainer>
      <div
        className="flex justify-between items-center mt-2 sm:mt-6 md:mt-10 lg:mt-12"
        id="services"
      >
        <p className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[40px] text-primaryGreen">
          Наши
        </p>
        <p className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[40px] text-primaryGreen">
          Услуги
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-6 gap-4">
        <div className="border border-white/30 rounded-[20px] p-5 overflow-hidden lg:row-span-2">
          <div className="h-full flex flex-col justify-between">
            <div>
              <p className="text-[35px]">01</p>
              <Image
                src={img1}
                alt="img"
                className="rotate-[-8deg] translate-x-10"
              />
            </div>
            <div>
              <p className="mt-10 text-[15px] opacity-80">
                Lorem ipsum что то такм просто спейс забить я че дурак тсоли
                писать это в ручную просто текст для вида
              </p>
              <p className="text-[30px] mt-4">Брендинг</p>
            </div>
          </div>
        </div>
        <div className="border border-white/30 rounded-[20px] p-5 overflow-hidden">
          <div className="flex gap-6">
            <p className="text-[35px]">02</p>
            <Image src={img2} alt="img" />
          </div>
          <p className="mt-10 md:mt-28 lg:mt-10 text-[15px] opacity-80">
            Lorem ipsum что то такм просто спейс забить я че дурак тсоли писать
            это в ручную просто текст для вида
          </p>
          <p className="text-[30px] mt-4">Веб сайт</p>
        </div>

        <div className="border border-white/30 rounded-[20px] p-5 overflow-hidden flex row-span-2">
          <div className="">
            <p className="text-[35px]">03</p>
            <p className="mt-32 text-[15px] opacity-80">
              Lorem ipsum что то такм просто спейс забить я че дурак тсоли
              писать это в ручную просто текст для вида
            </p>
            <p className="text-[30px] mt-4">СММ</p>
          </div>
          <div className="h-full">
            <Image src={img3} alt="img3" className="h-full translate-x-[50%]" />
          </div>
        </div>
        <div className="border border-white/30 rounded-[20px] p-5 overflow-hidden row-span-2">
          <div className="h-full flex flex-col justify-between">
            <div>
              <p className="text-[35px]">04</p>
              <Image src={img4} alt="img4" className="translate-y-[-20%]" />
            </div>
            <div>
              <p className="mt-4 text-[15px] opacity-80">
                Lorem ipsum что то такм просто спейс забить я че дурак тсоли
                писать это в ручную просто текст для вида
              </p>
              <p className="text-[30px] mt-4">Консультация</p>
            </div>
          </div>
        </div>
        <div className="border border-white/30 rounded-[20px] p-5 overflow-hidden">
          <div className="flex justify-between">
            <p className="text-[35px]">05</p>
            <Image
              src={img5}
              alt="img5"
              className="w-[200px] translate-x-[30%] translate-y-[-30%]"
            />
          </div>
          <p className="text-[30px] mt-4">Порт-фолио</p>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default ServicesSection;
