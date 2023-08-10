import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useController } from "react-hook-form";
import styles from "./slider.module.scss";
export default function MyRangeSlider({ name, control, defaultValue, required, placeholder, min, max }) {
  const [value, setValue] = useState(0);
  const { field } = useController({ name, control, rules: { required }, defaultValue: value });
  const [setDate] = useState();
  console.log("MyRangeSlider", value);
  return (
    <div>
      <input
        required={required}
        className="hidden"
        name={field.name}
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => {
          setDate(value);
        }}
        placeholder={placeholder}
      ></input>
      <div className="mt-3 w-[300px] px-2 flex flex-col gap-1">
        <div className="flex justify-between text-white">
          <p>от</p>
          <p>до</p>
        </div>
        <RangeSlider
          className={styles.slider}
          value={value}
          min={min}
          max={max}
          step={100}
          onInput={(e) => {
            setValue(e);
            field.onChange(e);
          }}
        />
        <div className="flex justify-between text-white">
          <p>{value[0]}</p>
          <p>{value[1]}</p>
        </div>
      </div>
    </div>
  );
}
