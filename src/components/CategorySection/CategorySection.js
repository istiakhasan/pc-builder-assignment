import React from "react";
import CategoryCard from "./CategoryCard";
import CategoryCardTwo from "./CategoryCardTwo";

const CategorySection = ({ category }) => {
  return (
    <div className=" py-16 mt-10">
      <h1 className="text-center my-16 lg:text-4xl text-2xl font-bold italic underline">
        Featured Category
      </h1>
      <div className="card-container  grid lg:grid-cols-3 gap-10 mt-10 lg:px-16">
        {category?.map((item, i) => (
          <CategoryCardTwo item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
