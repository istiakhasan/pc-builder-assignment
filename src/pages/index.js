import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/header/Header";
import RootLayout from "@/components/layouts/RootLayout";
import FeaturesProductCard from "@/components/featuresProductCard/FeaturesProductCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-4 mt-10">
        {[...Array(6).keys()].map((item) => (
          <FeaturesProductCard key={item} />
        ))}
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
