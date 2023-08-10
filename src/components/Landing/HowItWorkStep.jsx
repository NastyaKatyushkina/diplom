import classNames from "classnames";

export default function HowItWorkStep({ step, text, c }) {

  const image = classNames(
    {
      "bg-[url('img/step1.png')]": step === "step-1",
      "bg-[url('img/step2.png')]": step === "step-2",
      "bg-[url('img/step3.png')]": step === "step-3",
      "bg-cover w-[162px] h-[162px]": true,
    },
    [c ?? ""]
  );
  return (
    <div className="flex flex-col items-center gap-[34px]">
      <div className={image}></div>
      {/* <SvgStep url={item}/> */}
      <h4 className="text-white w-[250px] text-center text-24">{text}</h4>
    </div>
  );
}
