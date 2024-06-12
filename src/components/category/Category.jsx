import React, { useEffect, useState } from "react";
import "./category.scss";
import axios from "../../api";

const Category = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`/products/categories`, { params: { limit: 10 } })
      .then((res) => setData(res.data));
  }, []);

  let categoryItem = data?.map((name, inx) => (
    <ul key={inx} className="category__list">
      <li className="category__item">{name.slug}</li>
    </ul>
  ));

  return (
    <div className="category">
      <div className="container">
        <p className="category__link">
          `Главная - Каталог -{" "}
          <span className="category__link__blue">Готовые наборы</span>
        </p>
        <h2 className="category__title">Готовые наборы</h2>
        <div className="category__wrapper">{categoryItem}</div>
      </div>
    </div>
  );
};

export default Category;
