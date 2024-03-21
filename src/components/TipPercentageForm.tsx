import { tipOptions } from "../data"

type Props = {
  tip: number,
  setTip: (tip: number) => void
}

const TipPercentageForm = ({tip, setTip}: Props) => {
  return (
    <div>
      <h3 className="font-bold text-2xl">Propina: </h3>
      <form>
        { tipOptions.map(tipOption => (
          <div key={tipOption.id} className="flex gap-2 items-center justify-between w-[70px]">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              type="radio"
              name="tip"
              id={tipOption.id}
              value={tipOption.value}
              onChange={e => setTip(Number(e.target.value))}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  )
}

export default TipPercentageForm