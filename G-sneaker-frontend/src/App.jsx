import { useState, useEffect} from 'react'
import './App.css'
import ListProduct from './component/ListProduct'
import Cart from './component/Cart'

function  App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    fetch('http://localhost/shoes-shop-api/api/readShoes.php')
    .then((res) => res.json())
    .then((data) => {
        setProducts(data.data);
    })
    .catch((err) => console.log(err))

    const trueProducts = products.map((product) => {
        return {...product, quantity: 1, isChoose: false}
    })
    // setProducts(trueProducts)

    const handleAddToCart = (product) => {
        const index = products.findIndex((item) => item.id === product.id)
        const newProducts = [...products]
        newProducts[index].isChoose = true
        setProducts(newProducts)
    }

    useEffect(() => {
        const cartData = localStorage.getItem('cart')
        if (cartData) {
            setCart(JSON.parse(cartData))
        }
    }, [])

    const addToCart = (product) => {
        const addedProduct = {...product, isChoose: true};
        const updatedCart = [...cart, addedProduct];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeItem = (index) => {
        const updateCart = [...cart]
        updateCart.splice(index, 1)
        setCart(updateCart)
        localStorage.setItem('cart', JSON.stringify(updateCart))
    }

    const checkIsinCart = (id) => {
        const isChoose = cart.find((item) => item.id === id)
        if (isChoose) {
            return true
        }
        return false
    }

    return (
        <div className='main-content'>
            <ListProduct products={trueProducts} addToCart={addToCart} checkIsinCart={checkIsinCart} />
            <Cart cart={cart} removeItem={removeItem} setCart={setCart} />
        </div>
    )
}

export default App
