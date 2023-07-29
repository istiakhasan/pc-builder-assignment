import Image from "next/image";
import React from "react";

const FeaturesProductCard = () => {
  return (
    <div className="card rounded-none lg:card-side  bg-base-100 shadow-xl">
      <figure>
        {" "}
        <Image
          src="https://www.gamingscan.com/wp-content/uploads/2020/10/pc-component-compatibility.jpg"
          width={500}
          height={500} 
          className="h-full w-[250px]"
          alt="Picture of the author"
          responsive
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesProductCard;
