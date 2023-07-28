import RootLayout from "@/components/layouts/RootLayout";
import React from "react";

const Index = () => {
  return <div>pc builder page</div>;
};

export default Index;

Index.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
