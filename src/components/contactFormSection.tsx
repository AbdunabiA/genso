import WrapperContainer from "@/app/wrapperContainer";
import React from "react";
import PrimaryButton from "./ui/primaryButton";

const ContactFormSection = () => {
  return (
    <div
      className='bg-[url("/header-bg.png")] bg-cover bg-no-repeat pb-10'
      id="contact-us"
    >
      <WrapperContainer>
        <div className="flex flex-col items-center">
          <div className="max-md:w-full flex flex-col items-center gap-5 p-4 lg:p-32 lg:pt-28 bg-black/20 backdrop-blur-sm rounded-[0px_0px_20px_20px] lg:rounded-[0px_0px_80px_80px] overflow-hidden ">
            <p className="text-[24px] w-[250px] lg:text-[50px] lg:w-[500px] text-center lg:mb-12">
              Есть проект? Давайте обсудим.
            </p>
            <form className="w-full flex items-center flex-col gap-5">
              <input
                type="text"
                className="w-[80%] border border-primaryGreen bg-transparent lg:p-5 p-2 md:max-lg:w-[40%] rounded-[50px] text-center"
                placeholder="Ваше имя"
              />
              <input
                type="text"
                className="w-[80%] border border-primaryGreen bg-transparent lg:p-5 p-2 md:max-lg:w-[40%] rounded-[50px] text-center"
                placeholder="Ваш номер телефона"
              />
              <input
                type="text"
                className="w-[80%] border border-primaryGreen bg-transparent lg:p-5 p-2 md:max-lg:w-[40%] rounded-[50px] text-center"
                placeholder="Название вашей компании"
              />
              <PrimaryButton
                title="Отправить"
                className="w-[80%] md:max-lg:w-[40%]"
              />
            </form>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default ContactFormSection;
