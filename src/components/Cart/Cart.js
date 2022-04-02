import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveToCart }) => {
    //    4 ways conditional rendering
    // 1.Element variable
    // ternary operator  condition ? true:false
    // 3.&& operator(true hole && operator use korte hoi)
    // 4. || operator (false hole || operator use korte hoi )
    let command;
    if (cart.length === 0) {
        command = <p>Please add at least one item</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more items</p>
    }
    else {
        command = <p>Thanks for adding items</p>
    }
    return (
        <div className='cart-details'>
            <h3>Selected Items : {cart.length}</h3>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button className='remove-btn' onClick={() => handleRemoveToCart(tShirt)}>X</button>
                </p>)
            }
            {command}
            {cart.length !== 4 ? <p>Keep adding !!</p> : <button>Remove All</button>}
            {cart.length === 4 && <button className='green'>Review Orders</button>}
            {cart.length === 0 || <p className='green'>YAY! you are buying</p>}
            {cart.length === 3 && <div className='green'>
                <h4>Trigonal</h4>
                <p>Gift three friends </p>
            </div>}
        </div>
    );
};

export default Cart;