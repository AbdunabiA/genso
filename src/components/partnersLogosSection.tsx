import React from 'react'
import LogosCarousel from './carousels/logosCarousel';
import WrapperContainer from '@/app/wrapperContainer';

const PartnersLogosSection = () => {
  return (
    <>
      <WrapperContainer>
        <div className="lg:flex lg:justify-end">
          <p className="text-[30px] md:text-[40px] lg:text-[60px] lg:w-[550px] text-center lg:text-end mt-10">
            Наши партнеры нам
            <span className="text-primaryGreen"> доверяют!</span>
          </p>
        </div>
      </WrapperContainer>
      <div className="bg-[url('/header-bg.png')] bg-cover  rounded-[146px] mt-8 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-primaryGreen from-20% via-60% to-80% to-transparent p-6 md:p-8  lg:p-14">
          <LogosCarousel />
        </div>
      </div>
    </>
  );
}

export default PartnersLogosSection