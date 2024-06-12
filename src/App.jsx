import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SingleProduct from "./components/singli-product/SingleProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
