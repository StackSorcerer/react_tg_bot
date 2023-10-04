import React, { useState, useCallback, useEffect } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import { ProductCard } from '../ProductCard/ProductCard'
import './ProductList.css'

const products = [
  { id: '1', title: "Python-Start", price: 27500, description: "Изучение языка Python с помощью майнкрафта" },
  { id: '2', title: "Python-Junior", price: 35000, description: "Углубленное изучение языка Python" },
  { id: '3', title: "Python-Middle", price: 35000, description: "Создание сайтов и веб-приложений" },
  { id: '4', title: "Python-Proffecional", price: 40000, description: "Изучение дата-сайнс, апи, углубление изучение бэкенда" },
  { id: '5', title: "GameDev", price: 30000, description: "Создание игр, 3Д-моделирование" },
  { id: '6', title: "Scratch", price: 25000, description: "Программирование для детей" },
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
