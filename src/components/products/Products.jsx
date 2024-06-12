import React, { useEffect } from "react";
import "./products.scss";
import { IoBagHandleOutline } from "react-icons/io5";
import { NavLink, useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "../../api";
import { useCallback } from "react";
import Modal from "../modal/Modal";

const Products = () => {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [detailLoading, setDetailLoading] = useState(false);
  const [dataDetail, setDataDetail] = useState(null);
  let limit = searchParams.get("limit") || 1;
  let count = 4;
  let id = searchParams.get("detail");

  document.body.style.overflow = id ? "hidden" : "auto";

  useEffect(() => {
    axios
      .get(`/products`, { params: { limit: count * limit } })
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [limit]);

  const closeDetailModel = useCallback(() => {
    setDataDetail(null);
    setSearchParams({});
  }, []);

  useEffect(() => {
    if (id) {
      setDetailLoading(true);
    }
    if (id) {
      axios
        .get(`/products/${id}`)
        .then((res) => setDataDetail(res.data))
        .catch()
        .finally(() => setDetailLoading(false));
    }
  }, [searchParams]);

  let cardItem = data?.map((product) => (
    <div key={product.id} className="products__card">
      <div
        onClick={() => setSearchParams({ detail: product.id })}
        className="products__card__top"
      >
        <img src={product.images[0]} alt={product.title} />
      </div>
      <div className="products__card__bottom">
        <NavLink to={`/product/${product.id}`}>
          <h3 className="products__card__title">{product.title}</h3>
        </NavLink>
        <p className="products__card__text">{product.description}</p>
        <div className="products__card__btns">
          <p className="products__card__price">{product.price}</p>
          <div className="products__card__cart">
            <IoBagHandleOutline />
            <p>В корзину</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="products">
      <div className="container">
        <div className="products__cards">{cardItem}</div>
        <button
          onClick={() => setSearchParams({ limit: +limit + 2 })}
          className="products__btn"
        >
          Показать ещё
        </button>
      </div>
      {id ? (
        <Modal width={"70%"} close={closeDetailModel}>
          {detailLoading ? (
            <h2 className="products__detail__loading">Loading...</h2>
          ) : (
            <div className="products__detail">
              <img src={dataDetail?.images[0]} width={400} alt="" />
              <h2>{dataDetail?.title}</h2>
            </div>
          )}
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Products;
