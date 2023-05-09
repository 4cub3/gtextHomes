import React from "react";
import { NIGERIA_DATA, DUBAI_DATA } from "./AddressData";

const FootAddress: React.FC = () => {
  const nigeriaAddress = NIGERIA_DATA.map((data) => (
    <li
      key={data.id}
      className="my-8 flex gap-4 text-[12px] font-light last:uppercase"
    >
      {data.icon} <span>{data.desc}</span>
    </li>
  ));
  const dubiaAddress = DUBAI_DATA.map((data) => (
    <li
      key={data.id}
      className="my-8 flex gap-4 text-[12px] font-light uppercase"
    >
      {data.icon} <span>{data.desc}</span>
    </li>
  ));
  return (
    <article className="mt-24 font-sans text-white">
      <div className="my-6 sm:flex justify-between gap-8">
        <ul>
          <h3 className="leading-[29px] text-[18px]">Nigeria Office</h3>
          {nigeriaAddress}
        </ul>
        <ul>
          <h3 className="leading-[29px] text-[18px]">Dubai Office</h3>
          {dubiaAddress}
        </ul>
        <ul>
          <h3 className="leading-[29px] text-[18px]">United Kingdom Office</h3>
          {dubiaAddress}
        </ul>
      </div>
    </article>
  );
};

export default FootAddress;
