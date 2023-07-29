import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/header/Header";
import RootLayout from "@/components/layouts/RootLayout";
import CategorySection from "@/components/CategorySection/CategorySection";
import FeaturesProductCardTwo from "@/components/featuresProductCard/FeaturesProductCardTwo";

const inter = Inter({ subsets: ["latin"] });

export default function Home({category,products}) {
  console.log(products,"products");
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 gap-10 mt-10 lg:px-16">
        {products?.map((item) => (
          <FeaturesProductCardTwo key={item} item={item} />
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
  // Fetch category data
  const categoryRes = await fetch("http://localhost:4000/category");
  const categoryData = await categoryRes.json();

  // Fetch product data
  const productRes = await fetch("http://localhost:4000/product");
  const productData = await productRes.json();

  // Return both category and product data as props
  return { props: { category: categoryData, products: productData } };
};

