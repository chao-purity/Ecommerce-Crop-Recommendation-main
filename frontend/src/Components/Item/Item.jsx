import React from 'react'
import { Link } from 'react-router-dom'; 
import './Item.css'

export const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="Crop_image" /></Link>
        <p>{props.name}</p>
        <p>{props.description}</p>
        <div className="item-prices">
            <div className="item-price-new">
                Ksh. {props.new_price}
            </div>
            <div className="item-price-old">
                Ksh. {props.old_price}
            </div>

        </div>
    </div>
  )
}

export default Item;
