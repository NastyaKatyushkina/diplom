import React from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";
import InputCalendar from "../UI/InputCalendar";
import InputDropdown from "../UI/InputDropdown";
import classNames from "classnames";
import { useNavigate } from "react-router";

export default function SearchMain({ setStep, step, setSearchParams, searchParams }) {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submitSearch = (model) => {
    console.log("model submit", model);
    navigate(
      `/search/trains?from_city_id=${model.from_сity_id}&to_city_id=${model.to_city_id}&date_start=${model.date_start}&date_end=${model.date_end}`
    );
    step === 0 ? setStep(1) : setStep(0);
  };
  const classClass = classNames({
    "self-end": step !== 0,
  });
  const mainClass = classNames({
    " flex   px-[24px] pb-[32px] gap-[40px]": true,
    "flex-col gap-[50px]": step === 0,
  });
  const changeInputs = () => {
    const fromCityId = document.querySelector('input[name="from_сity_id"]');
    const toCityId = document.querySelector('input[name="to_city_id"]');
    const fromValue = fromCityId.value;
    fromCityId.value = toCityId.value;
    toCityId.value = fromValue;

    console.log(fromCityId, toCityId);
  };

  return (

    <div className={classClass}>
      {/* {!data ? ( */}
      <form
        onSubmit={handleSubmit(submitSearch)}
        className="bg-black/70 flex gap-0 flex-col px-[24px] pt-[79px] pb-[52px]"
      >
        <div className={mainClass}>
          <div className="flex flex-col">
            <h2 className="text-white text-30">Направление</h2>
            <div className="flex justify-between items-center gap-[8px]">
              {/* <Input name='citySearch' placeholder='Откуда'setValue={setCitySearch} /> */}
              {/* {loading ? <Loading/>:null} */}
              {/* {data?<Select name='cityfrom'  options={data} setValue={setSelectionCty} placeholder='Откуда'/>:null} */}
              <InputDropdown
                control={control}
                placeholder="Откуда"
                required
                name="from_сity_id"
                url="https://students.netoservices.ru/fe-diplom/routes/cities?name="
              />
              <div
                onClick={changeInputs}
                className="bg-[url('img/change.png')] w-[24px] h-[24px] bg-no-repeat bg-center"
              ></div>
              <InputDropdown
                control={control}
                placeholder="Куда"
                required
                name="to_city_id"
                url="https://students.netoservices.ru/fe-diplom/routes/cities?name="
              />
              {/* <Select name='cityto' placeholder='Куда'/> */}
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-30">Дата</h2>
            <div className="flex justify-between w-full gap-[40px]">
              {/* <Calendar onChange={setDateFrom} value={dateFrom} /> */}
              <InputCalendar control={control} required name="date_start" placeholder="ДД/ММ/ГГ" />
              <InputCalendar control={control} required name="date_end" placeholder="ДД/ММ/ГГ" />
              {/* <Input name='dateto' placeholder='ДД/ММ/ГГ'/> */}
            </div>
          </div>
        </div>
        <Button
          className="w-[286px] self-end text-24 mt-[20px] mr-[60px]"
          label="найти билеты"
          type="submit"
          color="orange"
        />
      </form>
      {/* ) : (
        <form>
          <div>RECM</div>
        </form>
      )} */}
    </div>
  );
}
