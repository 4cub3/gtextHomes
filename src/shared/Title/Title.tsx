import React from "react";

interface TitleProp {
  children: React.ReactNode;
  borderWhite?: boolean;
}

const Title: React.FC<TitleProp> = ({ children, borderWhite = false }) => {
  return (
    <div className="flex items-center gap-3">
      <hr className={`w-[49.71px] border-t ${borderWhite ? 'border-white':"border-black"}`} />
      <h2 className=" font-serif text-[18px] font-[400] leading-[29px] line-clamp-1">
        {children}
      </h2>
      <hr className={`w-[211.79px] border-t ${borderWhite ? 'border-white':"border-black"}`} />
    </div>
  );
};

export default Title;
