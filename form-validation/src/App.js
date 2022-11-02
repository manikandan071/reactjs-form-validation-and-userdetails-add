// import logo from './logo.svg';
import { useReducer } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './pages/form/form';
import Cart from './pages/cart/cart';
import Home from './pages/home/home';
import { stateCondex } from './pages/context/contex';
import { stateReducer } from './pages/context/reducer';
import { intialValue } from './pages/context/reducer';

function App() {
  const [state , dispatch]= useReducer(stateReducer,intialValue);
  console.log(state);
  return (
    <stateCondex.Provider value={{state , dispatch}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='Cart' element={<Cart />}/>
          <Route path='Home' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </stateCondex.Provider>
    
  );
}

export default App;
