import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const CategoryCard = () => {
  const router = useRouter();
  return (
    <div className="card w-[250px] p-1   bg-base-100 rounded-none  cm_shadow">
      <figure>
        <Image 
          width={500}
          height={100} 
          className="w-full h-[100px]"
          responsive
          src="https://www.gamingscan.com/wp-content/uploads/2020/10/pc-component-compatibility.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div onClick={()=>router.push('/category/1')} className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
