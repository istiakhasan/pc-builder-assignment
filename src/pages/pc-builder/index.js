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
    <div className="lg:px-10 mt-[50px] lg:w-[80%] mx-auto">
      {data?.map((item) => (
        <div
          style={{ border: "1px solid black" }}
          className="flex gap-10 mb-5 p-3 items-center flex-wrap  justify-between"
          key={item?._id}
        >
          <div>
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
          {builder.some((dt) => dt?.categoryId === item?._id) ? (
            <div className="flex-1 text-center">
              <button
                onClick={() => route.push(`/category/${item?._id}`)}
                className="btn w-full btn-disabled btn-sm "
              >
                Selected
              </button>
              <p className="text-green-600 font-semibold text-[14px]">
                {builder?.find((bd) => bd?.categoryId === item?._id) &&
                  builder.find((bd) => bd?.categoryId === item?._id)
                    ?.productName}
              </p>
            </div>
          ) : (
            <button
              onClick={() => route.push(`/pc-builder/${item?._id}`)}
              className="btn btn-primary lg:btn-sm btn-xs flex-1"
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
      {builder?.length > 0 && (
        <button
          onClick={() => {
            dispatch(resetBuilder());
            toast.warning("Reset ", {
              position: "bottom-right",
            });
          }}
          className="complete_btn ml-3 cursor-pointer bg-red-500 border-none py-2 px-16 text-white rounded-[5px] text-[12px] font-bold"
        >
          Reset
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
  const res = await fetch(`https://ir-telecom-server.vercel.app/category`);
  const data = await res.json();
  return { props: { data: data } };
};
