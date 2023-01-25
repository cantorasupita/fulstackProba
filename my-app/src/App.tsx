import React from 'react';
import './App.css';
import  '../src/scss/app.scss';

import Header from './components/Header';
import Home from './pages/Home'
import NotFound from './pages/NotFounds';
import Cart from './pages/Cart'
//router
import {
  Routes,
  Route,
} from "react-router-dom";
import FullPizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';



//type-------------------------------------------------
export type SortItem = {
  name: string,
  sortProperty: string
}

export const sortList: SortItem[] = [
  {name: "популярности (DESC)", sortProperty: 'rating'},
  {name: "популярности (ASC)", sortProperty: '-rating'},
  {name: "цене (DESC)", sortProperty: 'price'},
  {name: "цене (ASC)", sortProperty: '-price'},
  {name: "алфавиту (DESC)", sortProperty: 'title'},
  {name: "алфавиту (ASC)", sortProperty: '-title'},
]


function App() {






  return (

      <Routes>
          <Route path="/" element={<MainLayout />}>
              <Route path="" element={<Home />}/>
              <Route path="cart" element={<Cart/>}/>
              <Route path="*" element={<NotFound/>}/>
              <Route path='pizza/:id' element={<FullPizza/>}/> 
          </Route>
      </Routes>

  );
}

export default App;
