import FeaturesProductCardTwo from "@/components/featuresProductCard/FeaturesProductCardTwo";
import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const CategoryProduct = ({ data }) => {
  const { query } = useRouter();

  return (
    <div className="lg:px-10 px-3">
      <h1 className="lg:text-3xl text-xl underline font-bold">{`${data?.title} category products`}</h1>

      <div className="flex flex-wrap gap-10 lg:my-20 my-10">
        {data?.product?.map((item,i) => (
          <FeaturesProductCardTwo isBuilder={true}  key={i}  item={item} />
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
  const res = await fetch(`https://ir-telecom-server.vercel.app/category`);
  const category = await res.json();
  const paths = category?.map((item) => ({
    params: { builderid: item?._id?.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://ir-telecom-server.vercel.app/category/${params?.builderid}`
  );
  const data = await res.json();
  return { props: { data: data } };
};
