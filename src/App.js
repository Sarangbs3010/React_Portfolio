import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Router, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { productInputs, userInputs } from './formSource';
import './style/darkStyle.scss';
import { DarkModeContext } from './context/darkModeContext';

function App() {
  
  const {darkMode} = useContext(DarkModeContext);
  
  return ( 
    <div className={darkMode? "App dark" : "App"}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
                <Route path=':userId' element={<Single />} />
                <Route path='new' element={<New inputs={userInputs} title='Add New User'/>} />
                <Route index element={<List />} />
            </Route>
            <Route path='products'>
                <Route path=':productId' element={<Single />} />
                <Route path='new' element={<New inputs={productInputs} title='Add New Product'/>} />
                <Route index element={<List />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
