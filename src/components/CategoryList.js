import React from "react";

function CategoryList({ categories, onSelectCategory }) {
  return (
    <div className="category-list">
      <h2>Choose a Category</h2>
      {categories.map((category, index) => (
        <button key={index} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;