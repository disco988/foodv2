import { useContext } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
const Checkout = () => {
  const ctxCart = useContext(CartContext);
  const totalPrice = ctxCart.items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  return (
    <Modal>
      <form action="">
        <h2>Checkout</h2>
        <p>Total Amount:{currencyFormatter.format(totalPrice)}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
