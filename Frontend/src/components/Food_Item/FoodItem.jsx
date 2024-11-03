import React, { useContext, useState } from 'react'
import '../Food_Item/FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../Contexts/StoreContexts';

const FoodItem = ({id,name,price,description,image}) => {

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="image" className='food-item-img'/>
            {
                !cartItems[id]?<img className="add" onClick={()=>addToCart(id)}  src={assets.add_icon_white} alt='icon'/>
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)}  src={assets.remove_icon_red} alt="icon" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)}  src={assets.add_icon_green} alt="icon" />
                </div>
            }
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    </div>
  )
}

export default FoodItem 
