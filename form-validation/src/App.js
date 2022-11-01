// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './pages/form/form';
import Cart from './pages/cart/cart';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='Cart' element={<Cart />}/>
      <Route path='Home' element={<Home />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
