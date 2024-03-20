import { MenuItem } from "../types"

type Props = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}

const MenuItem = ({ item, addItem }: Props) => {
  const { name, price } = item
  return (
    <button
      onClick={() => addItem(item)} 
      className="w-full border-teal-500 hover:bg-teal-400 border-2 py-2 px-5 flex justify-between rounded-md"
    >
      <p>{name}</p>
      <p className="font-black">{price}</p>
    </button>
  )
}

export default MenuItem