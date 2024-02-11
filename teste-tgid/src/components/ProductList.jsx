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
                                    <button>Remover</button>
                                </li>
                            ))}
                        </ul>
                        <p>Total:</p>       
                </div>
            </main>
        )
    } 

export default Cart;