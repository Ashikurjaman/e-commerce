const addLocalStorage = id =>{
    let shoppingCart = addShoppingCart();

    let quintity = shoppingCart[id];

    if(!quintity){
        shoppingCart[id] = 1;
    }else{
        const newQuantity = quintity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('cart',JSON.stringify(shoppingCart))
}


const addShoppingCart =()=>{
    let shoppingCart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        shoppingCart= JSON.parse(storedCart);
    }

    return shoppingCart;
}


export {addLocalStorage}