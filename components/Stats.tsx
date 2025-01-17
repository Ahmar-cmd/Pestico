import React from "react";
import { stat } from "../constants";

const Stats = () => {
  return (
    <div
      className="w-full sm:h-[390px] h-auto bg-cover bg-center bg-primary flex justify-center items-center gap-6 flex-wrap p-10"
      style={{ backgroundImage: "url(/bg-1.jpg)" }}
    >
      <>
        {stat.map((stat, i) => (
          <div
            key={i}
            className="w-[250] h-[150px] flex justify-center items-center flex-col gap-2 bg-white rounded-lg px-6 py-3"
          >
            <h1 className="text-[44px] text-primary font-bold leading-[50px]">
              {stat.number}
            </h1>
            <h2 className="text-[18px] text-center">{stat.words}</h2>
          </div>
        ))}
      </>
    </div>
  );
};

export default Stats;
