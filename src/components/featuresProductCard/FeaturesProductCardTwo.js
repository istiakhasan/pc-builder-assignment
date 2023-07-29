import Image from "next/image";
import React from "react";

const FeaturesProductCardTwo = ({ item,data }) => {
  return (
    <div className=" w-[320px] h-auto">
      <div class="features_container h-[100%]">
        <div class="wrapper">
          <div class="banner-image">
            <img className="w-full h-full" src={item?.image} />
            {/* <Image 
          width={500}
          height={100} 
          className="w-full h-full"
          responsive
          src={item?.image}
          alt="Shoes"
        /> */}
          </div>
          <h1 className="text-start"> {item?.product_Name}</h1>
          <p className="text-start">
           {item?.description}
          </p>
          <p className="mt-4 text-start ">Category:  <strong className="underline">{data?.title}</strong></p>
          <p className="text-start text-3xl">Price: ${item?.price}</p>
          <p className="text-start text-3xl">Status: {item?.status}</p>
          <p className="text-start text-3xl">Rating: {item?.individualRating}</p>
        </div>
        <div class="button-wrapper flex justify-center gap-10">
          <button class="btn outline">DETAILS</button>
          <button class="btn fill">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesProductCardTwo;
