import FeaturesProductCardTwo from "@/components/featuresProductCard/FeaturesProductCardTwo";
import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const CategoryProduct = ({ data }) => {
  console.log(data, "data");
  const { query } = useRouter();

  return (
    <div className="px-10">
      <h1 className="text-3xl underline font-bold">{`${data?.title} category products`}</h1>

      <div className="flex gap-10 my-20">
        {data?.product?.map((item) => (
          <FeaturesProductCardTwo data={data} key={item?._id}  item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;

CategoryProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:4000/category`);
  const category = await res.json();
  const paths = category?.map((item) => ({
    params: { categoryid: item?._id?.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:4000/category/${params?.categoryid}`
  );
  const data = await res.json();
  return { props: { data: data } };
};
