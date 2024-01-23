import { addShoppingCart } from "../utilities/localstorage";

const CartLoader = async () => {
  const productLoader = await fetch("products.json");
  const products = await productLoader.json();

  const storedCart = addShoppingCart();
  const saveCart = [];

  for (const id in storedCart) {
    const addCart = products.find((pd) => pd.id === id);
    if (addCart) {
      const quantity = storedCart[id];
      addCart.quantity = quantity;
      saveCart.push(addCart);
    }
  }
  return saveCart;
};

export default CartLoader;
