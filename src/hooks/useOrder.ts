import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export const useOrder = () => {
  const [orders, setOrders] = useState<OrderItem[]>([])
  
  const addItem = (item: MenuItem): void => {
    const menuItemExists = orders.find(order => order.id === item.id)
    if (menuItemExists) {
      const ordersUpdate = orders.map(order => {
        if (order.id === item.id) {
          return {
            ...order,
            quantity: ++order.quantity
          }
        }
        return order 
      })
      setOrders(ordersUpdate)
    } else {
      setOrders([...orders, {
        ...item,
        quantity: 1
      }])
    }
  }

  const deleteItem = (id: number) => {
    const updateOrders = orders.filter(order => order.id !== id)
    setOrders(updateOrders)
  }

  return {
    orders,
    addItem,
    deleteItem
  }
}