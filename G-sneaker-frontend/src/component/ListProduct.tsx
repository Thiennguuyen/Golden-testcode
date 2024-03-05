// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react'
import { useEffect, useState } from 'react'
import '../css/card.css'

const ListProduct = (props) => {
    const { products, addToCart, checkIsinCart } = props
    const [cart, setCart] = useState([])

    useEffect(() => {
        const cartData = localStorage.getItem('cart')
        if (cartData) {
            setCart(JSON.parse(cartData))
        }
    }, [setCart])

    return (
        <div className="list-product">
            <div className='header'>
                <img src="../../nike.png" className='header-logo' />
            </div>
            <div className='header-title'>Our products</div>
            <div className='product-body'>
                <div>
                    { products.map((product, index) => {
                        return (
                            <div className='product-item' key={index}>
                                <div className='item-image' style={{backgroundColor: `${product.color}`}}>
                                    <img src={product.image}/>
                                </div>
                                <div className='item-name'>{product.name}</div>
                                <div className='item-description'>{product.description}</div>
                                <div className='item-bottom'>
                                    <div className='item-price'>${product.price.toFixed(2)}</div>
                                    {!checkIsinCart(product.id) ? 
                                    
                                        <div className='item-button' onClick={() => {
                                            addToCart(product)
                                        }}>
                                            <p>ADD TO CART</p>
                                        </div>
                                    : 
                                        <div className='inactive-button item-button'>
                                            <div className='item-button-cover'>
                                                <div className='check-icon'></div>
                                            </div>
                                        </div>
                                    }
                                    
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ListProduct