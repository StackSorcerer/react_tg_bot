import React, { useState, useCallback, useEffect } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import { ProductCard } from '../ProductCard/ProductCard'
import './ProductList.css'

// now i wanna buy  some helicopters
const products = [
  {id: '1', title: "Helicopter#1", price: 350000000, description: "Летает, не бит не крашен", image: "/src/assets/helicopter.jpg"},
  {id: '2', title: "Helicopter#2", price: 450000000, description: "Летала девушка, один хозяин", image: "/src/assets/helicopter.jpg"},
  {id: '3', title: "Helicopter#3", price: 550000000, description: "Летал только в выходные", image: "/src/assets/helicopter.jpg"},
  {id: '4', title: "Helicopter#4", price: 650000000, description: "Заливали только ракетное топливо", image: "/src/assets/helicopter.jpg"},
  {id: '5', title: "Helicopter#5", price: 750000000, description: "Обмен на квартиру", image: "../../assets/helicopter.jpg"},
  {id: '6', title: "Helicopter#6", price: 850000000, description: "Продам гараж, в подарок вертолет, торг, обмен, рассрочка, кредит, лизинг", image: "../../assets/helicopter.jpg"},

]


const getTotalPrice = (items) => {
  return items.reduce((acc, item) => {
    return acc += item.price
  }, 0)
}

export const ProductList = () => {

  const { tg, queryId } = useTelegram()
  const [addedItems, setAddedItems] = useState([])

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId
    }

      fetch('https://localhost/8000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
  }, [addedItems, queryId])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [tg, onSendData])

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id)
    let newItems = []

    if (alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id)
    } else {
      newItems = [...addedItems, product]
    }

    setAddedItems(newItems)

    if (newItems.length === 0) {
      tg.MainButton.hide()
    }
    else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`
      })
    }
  }

  return (
    <div className={'list'}>
      {products.map(item => (
        <ProductCard
          product={item}
          onAdd={onAdd}
          className={'item'}>
        </ProductCard>
      ))}
    </div>
  )
}
