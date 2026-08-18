import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function Home() {
const [showProducts, setShowProducts] = useState(false);
const navigate = useNavigate();

const handleStart = () => {
setShowProducts(true);
navigate("/plants");
};

return ( <div className="home-page"> <nav className="navbar"> <h1>Paradise Nursery</h1>

```
    <div className="nav-links">
      <a href="/">Inicio</a>
      <a href="/plants">Plantas</a>
      <a href="/cart">🛒 Carrito</a>
    </div>
  </nav>

  {!showProducts ? (
    <>
      <section className="hero">
        <div className="hero-content">
          <h2>Bienvenido a Paradise Nursery</h2>

          <p>
            Encuentra las plantas perfectas para llenar tu hogar
            de vida y naturaleza.
          </p>

          <button
            onClick={handleStart}
            className="start-button"
          >
            Comenzar
          </button>
        </div>
      </section>

      <AboutUs />
    </>
  ) : (
    <ProductList />
  )}
</div>
```

);
}

function App() {
return ( <BrowserRouter> <Routes>
<Route path="/" element={<Home />} />
<Route path="/plants" element={<ProductList />} />
<Route path="/cart" element={<CartItem />} /> </Routes> </BrowserRouter>
);
}

export default App;
