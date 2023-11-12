import { Category } from "./categories";
import ImageSlider from "./Slider";
import React from "react";

export default function Main({
  set,
  set3,
  setdeals,
  settrending,
  setrecommended,
}) {
  return (
    <>
      <ImageSlider />
      <Category
        setselectedcategory={set}
        setHandleClickOnCategory={set3}
        setdeal={setdeals}
        settrend={settrending}
        setrec={setrecommended}
      />
    </>
  );
}
