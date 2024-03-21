import { formatNumberToPen } from "../helpers"

type Props = {
  subTotal: number,
  tipTotal: number
}

const OrderTotals = ({ subTotal, tipTotal }: Props) => {
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
      </div>
    </>
  )
}

export default OrderTotals