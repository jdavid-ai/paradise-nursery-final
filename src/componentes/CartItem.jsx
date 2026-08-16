import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Próximamente");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <nav className="navbar">
          <h1>Paradise Nursery</h1>

          <div className="nav-links">
            <a href="/">Inicio</a>
            <a href="/plants">Plantas</a>
            <a href="/cart">🛒 Carrito (0)</a>
          </div>
        </nav>

        <main className="cart-container">
          <h2>Carrito de Compras</h2>

          <p>Tu carrito está vacío.</p>

          <a href="/plants" className="continue-button">
            Continuar comprando
          </a>
        </main>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <nav className="navbar">
        <h1>Paradise Nursery</h1>

        <div className="nav-links">
          <a href="/">Inicio</a>
          <a href="/plants">Plantas</a>

          <a href="/cart">
            🛒 Carrito ({totalItems})
          </a>
        </div>
      </nav>

      <main className="cart-container">
        <h2>Carrito de Compras</h2>

        {cartItems.map((item) => {
          const itemTotal = item.price * item.quantity;

          return (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-info">
                <h3>{item.name}</h3>

                <p>
                  Precio unitario: $
                  {item.price.toFixed(2)}
                </p>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    +
                  </button>
                </div>

                <p>
                  Total de esta planta: $
                  {itemTotal.toFixed(2)}
                </p>

                <button
                  className="remove-button"
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}

        <div className="cart-summary">
          <h3>
            Total del carrito: $
            {totalPrice.toFixed(2)}
          </h3>

          <div className="cart-actions">
            <a
              href="/plants"
              className="continue-button"
            >
              Continuar comprando
            </a>

            <button
              className="checkout-button"
              onClick={handleCheckout}
            >
              Pagar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CartItem;