import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border-radius: 7px;
    border: 2px solid;
    color: rgb(238, 108, 77);
    padding: 0.25em 1em;
    width: fit-content;
    height: fit-content;
`

const ListProducts = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
   
`

const ItemList = styled.li`
    flex: 1 1 300px;
    margin: 10px; 
`

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const ItemCart = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center
`

const ProductContainer = styled.div`
    margin-left: 8%;
    margin-top: 3%;
`

const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5%;
    padding: 6%;
    width: 45%
`

const ImageProduct = styled.img`
    max-width: 50%;
`

const CartText = styled.p`
    margin-right: 10px;
`

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
        const itemToRemove = cart.findIndex(product => product.id === id)
        if (itemToRemove !== -1) {
            const newCart = [...cart];
            newCart.splice(itemToRemove, 1);
            setCart(newCart)
        }
        
    }

    const totalPrice = () => {
        const price = cart.reduce((total, product) => total + product.preco, 0);
        return price.toFixed(2);
    }

        return (
            <MainContainer>
                <ProductContainer>
                    <ListProducts>
                        {products.map(product => (
                            <ItemList>
                                <p>{product.nome}</p>
                                <p>{product.autor}</p>
                                <ImageProduct src={product.image} alt='capa do livro'></ImageProduct>
                                <p>R${product.preco}</p>
                                <Button onClick={() => addProduct(product)}>Adicionar ao carrinho</Button>
                            </ItemList>
                        
                            ))}
                    </ListProducts>
                </ProductContainer>
                <CartContainer>
                    <h2>Carrinho</h2>
                        <ListProducts>
                            {cart.map(productCart => (
                                <ItemCart>
                                    <CartText>{productCart.nome} - R${productCart.preco}</CartText>
                                    <Button onClick={() => removeProduct(productCart.id)}>Remover</Button>
                                </ItemCart>
                            ))}
                        </ListProducts>
                        <p>Total: R${totalPrice()} </p>       
                </CartContainer>
            </MainContainer>
        )
} 

export default Cart;