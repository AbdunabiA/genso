import WrapperContainer from '@/app/wrapperContainer';
import React from 'react'


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
const StatisticsSection = () => {
  return (
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
    </WrapperContainer>
  );
}

export default StatisticsSection