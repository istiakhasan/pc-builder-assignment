import { useRouter } from "next/router";
import React from "react";
const CategoryCardTwo = ({item}) => {
  const router=useRouter()
  return (
    <div onClick={()=>router.push(`/category/${item?._id}`)} class="card-container">
    <div class="card_two mx-auto">
      <h3>{item?.title}</h3><br />
      <p>{item?.description?.length>200?item?.description?.slice(0,200):item?.description}</p>
      <div class="layers">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>   
      </div>
    </div> 
  </div>
  );
};

export default CategoryCardTwo;
