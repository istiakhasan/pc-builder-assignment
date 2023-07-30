import React from "react";
import CategoryCard from "./CategoryCard";
import CategoryCardTwo from "./CategoryCardTwo";

const CategorySection = ({ category }) => {
  return (
    <div>
      <div className="card-container  grid lg:grid-cols-3 gap-10 mt-10 lg:px-16">
        {category?.map((item, i) => (
          <CategoryCardTwo item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
