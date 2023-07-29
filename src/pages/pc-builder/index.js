import RootLayout from "@/components/layouts/RootLayout";
import { useGetCategoryQuery } from "@/redux/api/api";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const { data } = useGetCategoryQuery(undefined);
  const route=useRouter()
  return (
    <div className="px-10 mt-[50px] w-[70%] mx-auto">
      {data?.map((item) => (
        <div style={{border:"1px solid black"}} className="flex gap-10 mb-5 p-3 items-center  justify-between" key={item?._id}>
          <div className="flex-1"><img className="h-[70px] w-[70px] object-fill " src={item?.image} /></div>
          <h1 className="flex-1">{item?.title}</h1>
          <h1 className="flex-1">{item?.description}</h1>
          <button onClick={()=>route.push(`/category/${item?._id}`)} className="btn btn-primary btn-sm flex-1">Choose</button>
        </div>
      ))}
    </div>
  );
};

export default Index;

Index.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
