import React from 'react';
import './ProductCard.css';

function ProductCard(props)
{
    const{title, description, price, imageUrl}=props;
   return(
    <div className='prodcard'>
       <img src={imageUrl} alt={title} className='image'/>
     <div className='details'>
        <h1>{title}</h1>
        <p className='price'>${price}</p>
        <p className='desc'>{description}</p>
        <hr></hr>
     </div>
    </div>
   );
}
export default ProductCard;