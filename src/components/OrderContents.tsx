import { OrderItem } from "../types"

type Props = {
  orders: OrderItem[]
}

const OrderContents = ({ orders }: Props) => {
  return (
    <div>
      <h2 className="font-bold text-4xl">Consumo</h2>
      <div className="mt-5">
        {orders.length === 0 
        ? <p className="text-center">La orden está vacía</p>
        : ( orders.map(order => (
          <div key={order.id} className="flex justify-between items-center border-t border-gray-200 py-3 last-of-type:border-b">
            <div>
              <p className="text-lg">{order.name} - {order.price}</p>
              <p className="font-bold">Cantidad: {order.quantity} - {order.quantity * order.price}</p>
            </div>
            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-bold"
            >X
            </button>
          </div>
        )) )
        }
      </div>
    </div>
  )
}

export default OrderContents