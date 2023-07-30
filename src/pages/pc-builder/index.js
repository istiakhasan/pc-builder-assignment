import RootLayout from "@/components/layouts/RootLayout";
import { resetBuilder } from "@/redux/builderReducer";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Index = ({ data }) => {
  const { builder } = useSelector((state) => state.builder);
  const dispatch = useDispatch();
  const route = useRouter();
  return (
    <div className="px-10 mt-[50px] w-[80%] mx-auto">
      {data?.map((item) => (
        <div
          style={{ border: "1px solid black" }}
          className="flex gap-10 mb-5 p-3 items-center  justify-between"
          key={item?._id}
        >
          <div className="flex-1">
            <Image
              height={200}
              width={200}
              alt="image"
              className="h-[70px] w-[70px] object-fill "
              src={item?.image}
            />
          </div>
          <h1 className="flex-1 text-[12px] uppercase">{item?.title}</h1>
          <h1 className="flex-1 text-[12px]">{item?.description}</h1>
          {builder.some((dt) => dt == item?._id) ? (
            <button
              onClick={() => route.push(`/category/${item?._id}`)}
              className="btn btn-disabled btn-sm flex-1"
            >
              Selected
            </button>
          ) : (
            <button
              onClick={() => route.push(`/category/${item?._id}`)}
              className="btn btn-primary btn-sm flex-1"
            >
              Choose
            </button>
          )}
        </div>
      ))}

      {builder?.length < 5 ? (
        <button className="complete_btn cursor-pointer bg-[#D1D2D5] border-none py-2 px-16 text-[#ADBAC9] rounded-[5px] text-[12px] font-bold">
          Complete
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(resetBuilder());
            toast.success("Congratus  !You successfully build your pc ", {
              position: "bottom-right",
            });
          }}
          className="complete_btn cursor-pointer bg-[#5877F6] border-none py-2 px-16 text-white rounded-[5px] text-[12px] font-bold"
        >
          Complete
        </button>
      )}
    </div>
  );
};

export default Index;

Index.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/category`);
  const data = await res.json();
  return { props: { data: data } };
};
