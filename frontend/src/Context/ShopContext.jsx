import React, { useState, createContext, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [all_products, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});

    const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < all_products.length; index++) {
            cart[all_products[index].id] = []; // Initialize each product entry as an array
        }
        return cart;
    }

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
            .then(response => response.json())
            .then(data => {
                setAllProducts(data);
                setCartItems(getDefaultCart());
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Array.isArray(prev[itemId]) ? [...prev[itemId], itemId] : [itemId] // Add item to the array or initialize it as an array
        }));
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ itemId: itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    }
    

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newItems = [...prev[itemId]];
            newItems.pop(); // Remove one instance of the item
            return {
                ...prev,
                [itemId]: newItems
            };
        });
    }

    const getTotalCartAmount = () => {
        let totalamount = 0;
        for (const item in cartItems) {
            if (cartItems[item].length > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalamount += itemInfo.new_price * cartItems[item].length;
            }
        }
        return totalamount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item].length > 0) {
                totalItem += cartItems[item].length;
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
