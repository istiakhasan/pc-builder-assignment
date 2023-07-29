import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/header/Header";
import RootLayout from "@/components/layouts/RootLayout";
import CategorySection from "@/components/CategorySection/CategorySection";
import FeaturesProductCardTwo from "@/components/featuresProductCard/FeaturesProductCardTwo";

const inter = Inter({ subsets: ["latin"] });

export default function Home({category}) {
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-10 mt-10 lg:px-16">
        {[...Array(6).keys()].map((item) => (
          <FeaturesProductCardTwo key={item} />
        ))}
      </div>
      <CategorySection category={category} />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {
  const res = await fetch('http://localhost:4000/category')
  const repo = await res.json()
  return { props: { category:repo } }
}

