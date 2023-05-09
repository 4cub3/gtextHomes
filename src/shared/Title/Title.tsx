import React from "react";

interface TitleProp {
  children: React.ReactNode;
  borderWhite?: boolean;
  className?: string;
}

const Title: React.FC<TitleProp> = ({ children, borderWhite = false , className}) => {
  return (
    <div className={`flex items-center gap-3 ${className? className : ''}`}>
      <hr className={`max-w-[49.71px] w-full  border-t ${borderWhite ? 'border-white':"border-black"}`} />
      <h2 className=" font-serif text-[18px] font-[400] leading-[29px] w-[60rem] xs:w-auto ">
        {children}
      </h2>
      <hr className={`max-w-[211.79px] w-full border-t ${borderWhite ? 'border-white':"border-black"}`} />
    </div>
  );
};

export default Title;
