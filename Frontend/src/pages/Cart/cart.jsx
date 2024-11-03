import React, { useContext } from 'react';
import '../Cart/cart.css';
import { StoreContext } from '../../Contexts/StoreContexts';
import {useNavigate} from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, gitTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
            <div>
                <div key={index} className="cart-items-title cart-items-item">
                <img src={item.image} alt="img" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr />
            </div>

            );
          }
          return null; // Ensures nothing is rendered if cartItems[item._id] is 0 or undefined
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
                <p>SubTotal</p>
                <p>${gitTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                <b>Total</b>
                <b>${gitTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
      <div className="CART-PROMOCODE">
        <div>
          <p>If you have a prome code, Enter it here</p>
          <div className='cart-promocode-input'>
              <input type="text" placeholder='prome-code' />
              <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
