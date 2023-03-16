import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Signup from './pages/Signup/Signup';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Order from './pages/Order/Order';
import OrderView from './pages/Order/OrderView';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import ScrollToTop from './components/ScrollToTop';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/productlist/:category/:subcategory"
          element={<ProductList />}
        />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/ordersView" element={<OrderView />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
