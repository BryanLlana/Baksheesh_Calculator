import { useMemo, useState } from "react"
import { MenuItem, OrderItem } from "../types"

export const useOrder = () => {
  const [orders, setOrders] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)
  
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

  const subTotal = useMemo(() => orders.reduce((total, order) => total + (order.price * order.quantity), 0), [orders])

  const tipTotal = useMemo(() => subTotal * tip, [tip, orders])

  return {
    orders,
    tip,
    subTotal,
    tipTotal,
    setTip,
    addItem,
    deleteItem
  }
}