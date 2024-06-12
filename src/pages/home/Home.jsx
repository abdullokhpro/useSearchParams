import React, { useState } from "react";
import Header from "../../components/layout/header/Header";
import Category from "../../components/category/Category";
import Products from "../../components/products/Products";
import { useEffect } from "react";
import axios from "../../api";
import Footer from "../../components/layout/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Category />
        <Products />
      </main>
      <Footer />
    </>
  );
};

export default Home;
