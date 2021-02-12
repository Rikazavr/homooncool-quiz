import React from "react";
import { Link } from 'react-router-dom';

import data from '../data/questions.json';
const categories = data.categories;

const Categories = () => (
  <div>
    <ul>
      {
        categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${index}`}>{category.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

export default Categories;
