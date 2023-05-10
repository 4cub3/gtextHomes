
import { DUMMY_PROPERTIES } from "./OurPropertiesData";

const OurPropertiesVideoCard = () => {
  return (
    <>
      {DUMMY_PROPERTIES.map((data) => (
        <div
          key={data.id}
          className="w-[90rem] bg-white drop-shadow-lg"
        >
          <video src={data.video} width={400} controls className="rounded-lg" />
          <article className="w-[100%] whitespace-break-spaces break-words p-10">
            <p className="text-[1.4rem] leading-[25px] text-slate-800 italic">{data.desc}</p>
          </article>
        </div>
      ))}
    </>
  );
};

export default OurPropertiesVideoCard;
