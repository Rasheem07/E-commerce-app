import { Category } from "./categories";
import ImageSlider from "./Slider";
import React from "react";

export default function Main({set, set2 , set3}){
    return(
        <>
        <ImageSlider />
        <Category setselectedcategory={set} clickedCategory={set2} setHandleClickOnCategory={set3} />
        </>
    )
}