import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Order from './pages/Order/Order';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/productlist/:category/:subcategory"
          element={<ProductList />}
        />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
