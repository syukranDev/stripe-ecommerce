import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavbarComponent } from "./components/Navbar";
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Store } from './pages/Store';
import { Success } from './pages/Success';
import { Cancel } from './pages/Cancel';
import CartProvider from './context/CartContext';


function App() {
  return (
    // Wrap everything under cart provider so that the rest of component can access to its data
    <CartProvider> 
      <Container>
        <NavbarComponent>
        </NavbarComponent>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Store/>}></Route>
            <Route path='/success' element={<Success/>}></Route>
            <Route path='/cancel' element={<Cancel/>}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
