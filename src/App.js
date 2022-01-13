import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from "./views/Dashboard";
import Products from './views/Product/Products';
import Categories from './views/Category/Categories';
import AddCategory from './views/Category/AddCategory';
import AddProduct from './views/Product/AddProduct';
import Login from './views/Login';

// axios.defaults.withCredentials = true;

// import ProtectedRoute from './ProtectedRoute';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          {/* <Route exact path="/" element={<Dashboard />} /> */}
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/add" element={<AddProduct />} />
          <Route exact path="/category" element={<Categories />} />
          <Route path="/category/add" element={ <AddCategory />} />

          {/* <ProtectedRoute path="/" component={Dashboard} isAuth={isAuth} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
