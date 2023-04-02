import { createContext, useState } from "react";
import { productArray, getProductData } from "../fetcher/productItems";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},

})

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([])

    //=======================
    // [{ id: 1, quantity: 3}, { id: 2, quantity: 2} ]
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

     //=======================       
     function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { // product is in cart
            // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    //=======================
    // [{ id: 1, quantity: 3-1 }, { id: 2, quantity: 2}, { id: 3, quantity: 2} ]
    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }


    //=======================
    // function deleteFromCart(id) {
    //     setCartProducts(cartProduct => {
    //         cartProduct.filter(currentProduct => {
    //             return currentProduct.id != id;
    //         })
    //     })
            
    // }

    //Above not working bcs of nested curely bracket? Why? Error will shows something else .find() probs lol - need to study this
    function deleteFromCart(id) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })  
        )
    }

    //=======================
    function getTotalCost(){
        let totalCost = 0
        cartProducts.map(cartItem => {
            const productData = getProductData(cartItem.id)
            totalCost += (productData.price * cartItem.quantity)
        })

        return totalCost
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider



//Context (cart, addToCart, removeCart)
//Provicer -  gives your react app access to all the things in your context