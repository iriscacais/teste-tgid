import React, { useEffect, useState } from 'react';

const Cart = () => {
        const [products, setProducts] = useState([])
        const [cart, setCart] = useState([])

        useEffect(() => {
            fetch('http://localhost:3001/produtos')
            .then(response => response.json())
            .then(data => setProducts(data));
        }, []);
        console.log(products)
    
        return (
            <div>
                <h2>Lista de produtos</h2>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            {product.nome}
                            {product.descricao}
                            {product.preco}
                        </li>
                        
                    ))}
                </ul>
               
            </div>
        )
    } 

export default Cart;