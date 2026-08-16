import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function Home() {
  return (
    <div className="home-page">
      <nav className="navbar">
        <h1>Paradise Nursery</h1>

        <div className="nav-links">
          <a href="/">Inicio</a>
          <a href="/plants">Plantas</a>
          <a href="/cart">🛒 Carrito</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h2>Bienvenido a Paradise Nursery</h2>

          <p>
            Encuentra las plantas perfectas para llenar tu hogar
            de vida y naturaleza.
          </p>

          <a href="/plants" className="start-button">
            Comenzar
          </a>
        </div>
      </section>

      <AboutUs />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;