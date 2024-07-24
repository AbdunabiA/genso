import Image, { StaticImageData } from "next/image";
import Star from "./star";
import { cn } from "@/lib/utils";

interface Comment {
    name:string;
    company: string;
    comment:string;
    img:StaticImageData;
    classname?:string;
}

const st = [1,2,3,4,5]

const CommentCard = ({name, company, comment, img, classname}:Comment) => {
  return (
    <div className={cn(`backdrop-blur-md bg-white/5 rounded-[50px] p-6 transition-transform duration-300`, classname)}>
      <div className="flex items-center gap-2">
        <div>
          <Image src={img} alt="img" />
        </div>
        <div>
          <p className="text-[22px] lg:text-[25px] font-bold">{name}</p>
          <p className="text-[14px] lg:text-[17px]">Компания {company}</p>
        </div>
      </div>
      <p className="my-4 text-[18px] lg:text-[20px] font-[100]">{comment}</p>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          {st.map((star, i) => {
            return <Star key={i} className="w-6 fill-[#FFAC33] lg:w-8" />;
          })}
        </div>
        <p className="text-2xl lg:text-4xl">5</p>
      </div>
    </div>
  );
}

export default CommentCard