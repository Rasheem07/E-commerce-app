import { Category } from "./categories";
import ImageSlider from "./Slider";
import React from "react";

export default function Main({set}){
    return(
        <>
        <ImageSlider />
        <Category setselectedcategory={set}/>
        </>
    )
}