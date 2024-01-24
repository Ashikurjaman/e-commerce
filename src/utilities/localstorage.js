const addLocalStorage = id =>{
    let shoppingCart = addShoppingCart();

    let quintity = shoppingCart[id];

    if(!quintity){
        shoppingCart[id] = 1;
    }else{
        const newQuantity = quintity + 1;
        shoppingCart[id] = newQuantity;
    }
    //Set cart in local Storage
    localStorage.setItem('cart',JSON.stringify(shoppingCart))
}

const removeFromDb = id => {
    const shoppingCart = addShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('cart', JSON.stringify(shoppingCart));
    }
}


const addShoppingCart =()=>{
    let shoppingCart = {};

    //Get cart from local Storage
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        shoppingCart= JSON.parse(storedCart);
    }

    return shoppingCart;
}



const deleteShoppingCart = () => {
    localStorage.removeItem('cart');
}


export {addLocalStorage,addShoppingCart,removeFromDb,deleteShoppingCart}