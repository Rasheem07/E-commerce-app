import { categories } from "./main/categorieslist";

export default function Test(){
return(
categories.map(cat => {
    console.log(cat.name)
    cat.products.map(product => {
        console.log(product.name)
    })
})
);
}