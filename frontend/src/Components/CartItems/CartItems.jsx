import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const {getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext);

    // Add a check to ensure all_products is defined and is an array
    if (!all_products || !Array.isArray(all_products)) {
        return <div>Loading...</div>;
    }

    // Add a check to ensure cartItems is defined
    if (!cartItems) {
        return <div>No items in the cart.</div>;
    }

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                // Ensure cartItems[e.id] is defined before accessing its properties
                if (cartItems[e.id] && cartItems[e.id].length > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>Ksh. {e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id].length}</button>
                                <p>{e.new_price * cartItems[e.id].length}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id); }} alt="Remove item" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>Ksh{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Delivery fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Total</p>
                            <h3>Ksh{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
