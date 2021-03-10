import React from "react";
import Questions from './Questions';

const Categories = ({ categories }) => {
  return (
    <section className="categories">
      {
        categories.map((category, index) => (
          <div key={index} className="category">
            <h2 className="category__name">{category.name}</h2>
            <Questions category={category} />
          </div>
        ))
      }
    </section>
  )
};

export default Categories;
