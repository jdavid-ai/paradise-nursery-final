import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Plantas de Interior",
    price: 25,
    image: "/imagenes/monstera.jpg",
  },
  {
    id: 2,
    name: "Pothos Dorado",
    category: "Plantas de Interior",
    price: 18,
    image: "/imagenes/pothos.jpg",
  },
  {
    id: 3,
    name: "Sansevieria",
    category: "Plantas de Interior",
    price: 22,
    image: "/imagenes/sansevieria.jpg",
  },
  {
    id: 4,
    name: "Lirio de la Paz",
    category: "Plantas de Interior",
    price: 20,
    image: "/imagenes/peace-lily.jpg",
  },
  {
    id: 5,
    name: "Planta ZZ",
    category: "Plantas de Interior",
    price: 24,
    image: "/imagenes/zz-plant.jpg",
  },
  {
    id: 6,
    name: "Planta Araña",
    category: "Plantas de Interior",
    price: 16,
    image: "/imagenes/spider-plant.jpg",
  },

  {
    id: 7,
    name: "Ave del Paraíso",
    category: "Plantas Tropicales",
    price: 35,
    image: "/imagenes/bird-paradise.jpg",
  },
  {
    id: 8,
    name: "Calathea",
    category: "Plantas Tropicales",
    price: 28,
    image: "/imagenes/calathea.jpg",
  },
  {
    id: 9,
    name: "Croton",
    category: "Plantas Tropicales",
    price: 26,
    image: "/imagenes/croton.jpg",
  },
  {
    id: 10,
    name: "Ficus Lyrata",
    category: "Plantas Tropicales",
    price: 32,
    image: "/imagenes/fiddle-leaf.jpg",
  },
  {
    id: 11,
    name: "Árbol de Caucho",
    category: "Plantas Tropicales",
    price: 30,
    image: "/imagenes/rubber-plant.jpg",
  },
  {
    id: 12,
    name: "Alocasia",
    category: "Plantas Tropicales",
    price: 29,
    image: "/imagenes/alocasia.jpg",
  },

  {
    id: 13,
    name: "Aloe Vera",
    category: "Suculentas",
    price: 15,
    image: "/imagenes/aloe-vera.jpg",
  },
  {
    id: 14,
    name: "Echeveria",
    category: "Suculentas",
    price: 12,
    image: "/imagenes/echeveria.jpg",
  },
  {
    id: 15,
    name: "Haworthia",
    category: "Suculentas",
    price: 13,
    image: "/imagenes/haworthia.jpg",
  },
  {
    id: 16,
    name: "Planta de Jade",
    category: "Suculentas",
    price: 17,
    image: "/imagenes/jade.jpg",
  },
  {
    id: 17,
    name: "Sedum",
    category: "Suculentas",
    price: 11,
    image: "/imagenes/sedum.jpg",
  },
  {
    id: 18,
    name: "Cactus Zebra",
    category: "Suculentas",
    price: 14,
    image: "/imagenes/zebra-haworthia.jpg",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const isInCart = (productId) =>
    cartItems.some((item) => item.id === productId);

  return (
    <div className="products-page">
      <nav className="navbar">
        <h1>Paradise Nursery</h1>

        <div className="nav-links">
          <a href="/">Inicio</a>
          <a href="/plants">Plantas</a>
          <a href="/cart">
            🛒 Carrito ({cartCount})
          </a>
        </div>
      </nav>

      <main className="product-container">
        <h2>Nuestras Plantas</h2>

        {categories.map((category) => (
          <section
            key={category}
            className="category-section"
          >
            <h3>{category}</h3>

            <div className="product-grid">
              {products
                .filter(
                  (product) =>
                    product.category === category
                )
                .map((product) => (
                  <article
                    className="product-card"
                    key={product.id}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <h4>{product.name}</h4>

                    <p>
                      ${product.price.toFixed(2)}
                    </p>

                    <button
                      disabled={isInCart(product.id)}
                      onClick={() =>
                        dispatch(addToCart(product))
                      }
                    >
                      {isInCart(product.id)
                        ? "Agregado"
                        : "Agregar al Carrito"}
                    </button>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;