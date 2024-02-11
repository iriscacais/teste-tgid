import React, { useEffect, useState } from 'react';

const Cart = () => {
        const [products, setProducts] = useState([])
        const [cart, setCart] = useState([])

        useEffect(() => {
            fetch('http://localhost:3001/produtos')
            .then(response => response.json())
            .then(data => setProducts(data));
        }, []);
        // console.log(products)
    
        const addProduct = (product) => {
            setCart([...cart, product]);
        }
        // console.log(cart)

        const removeProduct = (id) => {
            const newCart = cart.filter(product => product.id !== id)
            setCart(newCart)
        }

        const totalPrice = () => {
            return cart.reduce((total, product) => total + product.preco, 0);
        }

        return (
            <main>
                <div>
                    <h2>Lista de produtos</h2>
                        <ul>
                            {products.map(product => (
                                 <li key={product.id}>
                                    {product.nome}
                                    {product.descricao}
                                    {product.preco}
                                    <button onClick={() => addProduct(product)}>Adicionar ao carrinho</button>
                                 </li>
                        
                            ))}
                        </ul>
                </div>
                <div>
                    <h2>Carrinho</h2>
                        <ul>
                            {cart.map(productCart => (
                                <li key={productCart.id}>
                                    {productCart.nome}
                                    {productCart.preco}
                                    <button onClick={() => removeProduct(productCart.id)}>Remover</button>
                                </li>
                            ))}
                        </ul>
                        <p>Total: {totalPrice()} </p>       
                </div>
            </main>
        )
    } 

export default Cart;