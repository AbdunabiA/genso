import Link from "next/link";
import WrapperContainer from "./wrapperContainer";


const Footer = () => {
  return (
    <footer className="pt-[43px] pb-[40px]">
      <WrapperContainer>
        <div className="flex justify-end">
          <p className="text-[18px] text-white font-thin">
            Создано с любовью <span className="text-primaryGreen">Genso</span>
          </p>
        </div>
        <div className="flex items-start justify-between mt-11">
          <div></div>
          <div className="flex items-end gap-16 text-white">
            <div className="flex flex-col gap-2 text-[14px]">
              <Link href={""}>Telegram</Link>
              <Link href={""}>Instagram</Link>
              <Link href={""}>YouTube</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href={"tel:+998913272217"}>+998 91 327-22-17</Link>
              <Link href={""}>genso.studio@gmail.com</Link>
            </div>
          </div>
        </div>
        <div className="text-white text-[14px] flex justify-center items-center mt-8">
          <p>Genso. Все права защищены.</p>
        </div>
      </WrapperContainer>
    </footer>
  );
}

export default Footer