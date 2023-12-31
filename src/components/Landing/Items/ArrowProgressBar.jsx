import classNames from "classnames";
import React from "react";

export default function ArrowProgressBar({ text, number, color }) {
  const classClass = classNames({
    "w-full flex items-center h-full justify-center text-white gap-[40px]  pl-[-180px] font-bold text-30": true,
    "bg-[url('img/Rectangle7.png')] bg-[length:680px_100px] bg-no-repeat z-10  ": color === "orange",
  });
  return (
    <div className="flex w-1/4">
      <div className={classClass}>
        {text}
        <div className="border-2 border-white rounded-[30px] text-center p-2 text-white w-[60px] ">{number}</div>
      </div>
      {color === "gray" ? (
        <div className="bg-[url('img/Vector.svg')] bg-cover  w-[40px] h-[98px] " id="vector"></div>
      ) : (
        <></>
      )}
    </div>
  );
}
