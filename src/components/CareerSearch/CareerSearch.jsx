import React, { useState } from "react";
import "./CareerSearch.css";

const CareerSearch = ({ careers, setFiltered }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filterCareer = (value, type) => {
    let searchValue = type === "search" ? value : search;

    let categoryValue = type === "category" ? value : category;

    setSearch(searchValue);
    setCategory(categoryValue);

    const result = careers.filter((career) => {
      const nameMatch = career.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const categoryMatch =
        categoryValue === "All" || career.category === categoryValue;

      return nameMatch && categoryMatch;
    });

    setFiltered(result);
  };

  return (
    <div className="career-search-box">
      <input
        className="career-search-input"
        placeholder="Search career..."
        value={search}
        onChange={(e) => filterCareer(e.target.value, "search")}
      />

      <select
        className="career-filter"
        value={category}
        onChange={(e) => filterCareer(e.target.value, "category")}
      >
        <option>All</option>
        <option>Technology</option>
        <option>Healthcare</option>
        <option>Business</option>
        <option>Creative</option>
        <option>Engineering</option>
        <option>Teaching</option>
      </select>
    </div>
  );
};

export default CareerSearch;
