import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./single-product.scss";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="single-page">
      <div className="container">
        <div className="single-page__wrapper">
          <img src={product?.images[0]} alt="" width={500} />
          <div className="single-page__right">
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <button
              className="single-page__btn"
              onClick={(prev) => navigate("/")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
