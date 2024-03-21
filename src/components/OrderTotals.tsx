import { formatNumberToPen } from "../helpers"

type Props = {
  subTotal: number,
  tipTotal: number,
  totalAmount: number,
  placeOrder: () => void
}

const OrderTotals = ({ subTotal, tipTotal, totalAmount, placeOrder }: Props) => {
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-bold text-2xl">Totales y Propina</h2>
        <p>Subtotal a Pagar: 
          <span className="font-bold"> {formatNumberToPen(subTotal)}</span>
        </p>
        <p>Propina: 
          <span className="font-bold"> {formatNumberToPen(tipTotal)}</span>
        </p>
        <p>Total a Pagar: 
          <span className="font-bold"> {formatNumberToPen(totalAmount)}</span>
        </p>
      </div>

      <button
        className="w-full bg-black py-3 text-white font-bold mt-10 disabled:opacity-50"
        onClick={() => placeOrder()}
      >
        Guardar Orden
      </button>
    </>
  )
}

export default OrderTotals