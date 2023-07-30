import RootLayout from "@/components/layouts/RootLayout";
import Image from "next/image";
import React from "react";

const ProductDetails = ({ data }) => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 lg:w-[70%] px-3 mx-auto my-10">
        <div>
          <Image height={200} width={200}  src={data?.image} className="lg:h-[500px] h-[300px] rounded-[4px] w-full" alt=""/>
        </div>
        <div className="lg:px-10">
          <h1 className="text-2xl font-semibold ">{data?.product_Name}</h1>
          <div>
            <p className="text-[11px] underline uppercase font-semibold">
              Description:
            </p>
            <p>{data?.description}</p>
            <p className="text-[11px] underline uppercase font-semibold">
              Key Features:
            </p>
            <ul style={{ padding: "0 18px" }}>
              {data?.KeyFeatures && Object.keys(data?.KeyFeatures).map((dt, index) => (
                <li
                  className="text-[12px] font-semibold mb-2"
                  style={{ listStyle: "initial" }}
                  key={index}
                >
                  <strong>{dt} </strong>: {data?.KeyFeatures[dt]}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2  ">
              <p className="text-[11px] uppercase font-semibold">
                Category:{" "}
                <strong className="underline">{data?.category?.title}</strong>
              </p>
              <p className="text-[11px] uppercase font-semibold">
                Status: <strong className="underline">{data?.status}</strong>
              </p>
            </div>
            <div className="grid grid-cols-2 ">
              <p className="text-[11px] uppercase font-semibold">
                Individual Ratings:{" "}
                <strong className="underline text-[16px]">
                  {data?.individualRating}
                </strong>
              </p>
              <p className="text-[11px] uppercase font-semibold">
                Avr Ratings:{" "}
                <strong className="underline text-[16px]">
                  {data?.averageRating}
                </strong>
              </p>
            </div>

            <div className="grid grid-cols-2">
              <p className="text-[11px] uppercase font-semibold">
                Reviews:{" "}
                <strong className="underline text-[16px]">
                  {data?.reviews}
                </strong>
              </p>
              <p className="text-[11px] uppercase font-semibold">
                Price:{" "}
                <strong className="underline text-[16px]">
                  ${data?.price}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:4000/product`);
  const products = await res.json();
  const paths = products?.map((product) => ({
    params: { productid: product?._id?.toString() },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/product/${params?.productid}`);
  const data = await res.json();
  return { props: { data: data } };
};
