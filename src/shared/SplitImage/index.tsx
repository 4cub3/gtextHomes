import React from "react";
interface SplitImageProps {
  image: string;
  className?: string;
}

const SplitImage: React.FC<SplitImageProps> = ({ image, className }) => {
  return (
    <figure className={`flex items-center justify-center gap-4 ${className ? className : ''}`}>
      <div className="max-h-[50.5rem] max-w-[80rem]  md:w-[32rem] sm:h-[50.5rem] overflow-hidden rounded-lg">
        <img src={image} alt="" className="h-full w-full object-cover object-center" />
      </div>
      <div className="hidden sm:block h-[36rem] max-w-[10.4rem] sm:w-[10.4rem] sm:h-[36rem] overflow-hidden rounded-lg">
        <img src={image} alt="" className="h-full w-full object-cover object-right" />
      </div>
    </figure>
  );
};

export default SplitImage;
