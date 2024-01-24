import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addLocalStorage, addShoppingCart, deleteShoppingCart } from "../../utilities/localstorage";
import { Link } from "react-router-dom";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    //    call localstorage get function

    const storeData = addShoppingCart();
    const saveData = [];
    for (const id in storeData) {
      // find id from products
      const addToCartLocalstorageData = products.find(
        (product) => product.id === id
      );

    
      //find quintity from storedata

      if (addToCartLocalstorageData) {
        const quintity = storeData[id];

        // set quintity to find product ids product
        addToCartLocalstorageData.quantity = quintity;
        saveData.push(addToCartLocalstorageData);
      }

      setCart(saveData);
    }
  }, [products]);
  const handelOrder = (product) => {
    let newCart = [];
    // first time product add in cart search product in cart
        const exists = cart.find(pd=>pd.id === product.id)

        // then check product have or not if product not in cart then add product newCart using spread operator and set quantity 1
        if(!exists){
            product.quantity = 1;
            newCart = [...cart ,product]
        }
        // if product exists then set products quantity + 1 and filter data previous added items set one variable using spread operator and then set this two variable value new cart. 
        
        else{
            exists.quantity = exists.quantity + 1;
            let remaining = cart.filter(pd=>pd.id !== product.id)
            
            newCart=[...remaining,exists] 
        }
    setCart(newCart)
    addLocalStorage(product.id);

  };

  const handelCartDelete = ()=>{
    setCart([]);
    deleteShoppingCart()

}
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelOrder={handelOrder}
          ></Product>
        ))}
      </div>
      <div className="orders">
        <Cart cart={cart} handelCartDelete={handelCartDelete} 
        > <Link to={'/orders'}>
        <button className='btn-review'>Review proceed</button>
        </Link></Cart>
      </div>
    </div>
  );
};

export default Shop;
