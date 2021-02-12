import React from "react";
import { Link } from 'react-router-dom';

import data from '../data/questions.json';
const categories = data.categories;

const Categories = () => (
  <div>
    <ul>
      {
        categories.map((categorie, index) => (
          <li key={index}>
            <Link to={`/categorie/${index}`}>{categorie.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

export default Categories;
