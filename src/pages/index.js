import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/header/Header";
import RootLayout from "@/components/layouts/RootLayout";
import CategorySection from "@/components/CategorySection/CategorySection";
import FeaturesProductCardTwo from "@/components/featuresProductCard/FeaturesProductCardTwo";
import { useSession, signIn, signOut } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ category, products }) {
  const session = useSession();
  console.log(session, "session");
  return (
    <>
      <Header />
      <h1 className="text-center my-16 lg:text-4xl text-2xl font-bold italic underline">Featured products</h1>
      <div className="grid lg:grid-cols-3 lg:gap-y-28 gap-y-10 mt-10 lg:px-16">
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
  const categoryRes = await fetch("https://ir-telecom-server.vercel.app/category");
  const categoryData = await categoryRes.json();

  // Fetch product data
  const productRes = await fetch("https://ir-telecom-server.vercel.app/product");
  const productData = await productRes.json();

  // Return both category and product data as props
  return { props: { category: categoryData, products: productData } };
};
