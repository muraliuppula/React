import React from 'react';
import './ProductItem.css';

export default function ProductItem(props) {
    const { img, name, number, pricing } = props.data;
    function productItemClick() {
        console.log({
            partNo: number,
            price: pricing
        })
    }
    return (
        <div className="product-container">
            <div className='img-container'>
                <img src={img} />
            </div>
            <div className='description-container'>
                <h3>{name}</h3>
                <h6>Part No: <label>{number}</label></h6>
                <h4>${pricing}</h4>
                <button onClick={productItemClick.bind()}>Add to Cart</button>
            </div>
        </div>
    )
}