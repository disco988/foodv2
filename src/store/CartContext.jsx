import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (state, action) => {
  const updatedItems = [...state.items];

  if (action.type === "ADD_ITEM") {
    const itemIndex = updatedItems.findIndex(
      (item) => item.id === action.item.id
    );

    if (itemIndex > -1) {
      const existingCartItem = updatedItems[itemIndex];
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };

      updatedItems[itemIndex] = updatedItem;
      console.log(updatedItems);
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
      console.log(updatedItems);
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const itemIndex = updatedItems.findIndex((item) => item.id === action.id);
    const existingCartItem = updatedItems[itemIndex];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(itemIndex, 1);
    } else {
      updatedItems[itemIndex] = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
    }
    return { ...state, items: updatedItems };
  }

  return state;
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  const cartContextValue = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
