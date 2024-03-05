// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from 'react'
import { useEffect, useState } from 'react'
import '../css/card.css'

const Cart = (props) => {
    const { cart, removeItem, setCart } = props
    const [totalPrice, setTotalPrice] = useState(0.00)

    useEffect(() => {
        let total = 0
        cart.forEach((item) => {
            total += item.price * item.quantity
        })
        setTotalPrice(total)
    }, [cart])


    const handlechangeQuantity = (index, type) => {
        const updateCart = [...cart]
        if (type === 'plus') {
            updateCart[index].quantity += 1
        } else {
            updateCart[index].quantity -= 1
            if (updateCart[index].quantity === 0) {
                removeItem(index)
                return
            }  
        }
        setCart(updateCart)
        localStorage.setItem('cart', JSON.stringify(updateCart))
    }

    

    return (
        <div className="list-product">
            <div className='header'>
                <img src="../../nike.png" className='header-logo' />
            </div>
            <div className='header-title'>
                Your cart
                <span className='total-price'>${totalPrice.toFixed(2)}</span>
            </div>
            {cart.length > 0 ? 
                <div className='product-body'>
                    <div>
                        <div>
                            {cart.map((item, index) => {
                                return (
                                    <div className='cart-item' key={index}>
                                        <div className='cartItem-left'>
                                            <div className='cartItem-image' style={{backgroundColor: `${item.color}`}}>
                                                <div className='cartItem-image-block'>
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='cartItem-right'>
                                            <div className='cartItem-name'>{item.name}</div>
                                            <div className="cartItem-price">${item.price}</div>
                                            <div className="cartItem-action">
                                                <div className='cartItem-quantity'>
                                                    <div className="count-button" onClick={() => {handlechangeQuantity(index, "minus")}}>-</div>
                                                    <div className="count-number">{item.quantity}</div>
                                                    <div className="count-button" onClick={() => {handlechangeQuantity(index, "plus")}}>+</div>
                                                </div>
                                                <div className="cartItem-remove" onClick={() => {removeItem(index)}}>
                                                    <img src="../../trash.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                                
                        </div>
                    </div>
                </div>
                    
                
                 
            
            :
                <div className='cart-empty'>
                    <p className='empty-text'>Your cart is empty</p>
                </div>
            }
            
        </div>
    )
}

export default Cart