import { tipOptions } from "../data"

type Props = {
  setTip: (tip: number) => void
}

const TipPercentageForm = ({setTip}: Props) => {
  return (
    <div>
      <h3 className="font-bold text-2xl">Propina: </h3>
      <form>
        { tipOptions.map(tip => (
          <div key={tip.id} className="flex gap-2 items-center justify-between w-[70px]">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              type="radio"
              name="tip"
              id={tip.id}
              value={tip.value}
              onChange={e => setTip(Number(e.target.value))}
            />
          </div>
        ))}
      </form>
    </div>
  )
}

export default TipPercentageForm