import { addToBuilder } from "@/redux/builderReducer";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const FeaturesProductCardTwo = ({ item,isBuilder }) => {
  const router = useRouter();
  console.log(router.pathname, "router");
  const dispatch = useDispatch();
  return (
    <div className=" w-[320px] h-auto mx-auto ">
      <div class="features_container h-[100%]">
        <div class="wrapper">
          <div class="banner-image">
            {/* <img className="w-full h-full" src={item?.image} /> */}
            <Image
              width={500}
              height={100}
              className="w-full h-full"
              responsive
              src={item?.image}
              alt="Shoes"
            />
          </div>
          <h1 className="text-start"> {item?.product_Name}</h1>
          <p className="text-start">{item?.description}</p>
          <p className="mt-4 text-start ">
            Category:{" "}
            <strong className="underline">{item?.category?.title}</strong>
          </p>
          <p className="text-start text-3xl">Price: ${item?.price}</p>
          <p className="text-start text-3xl">Status: {item?.status}</p>
          <p className="text-start text-3xl">
            Rating: {item?.individualRating}
          </p>
        </div>
        <div class="button-wrapper flex justify-center w-full gap-10">
          <Link href={`/product/${item?._id}`} class="btn outline flex-1">
            DETAILS
          </Link>
          {isBuilder && (
            <button
              onClick={() => {
                dispatch(
                  addToBuilder({
                    categoryId: item?.category?._id,
                    productName: item?.product_Name,
                  })
                );
                router.push(`/pc-builder`);
              }}
              class="btn fill"
            >
              Add To Builder
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturesProductCardTwo;
