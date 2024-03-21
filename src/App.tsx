import Header from "./components/Header"
import MenuItem from "./components/MenuItem"
import { menuItems } from "./data"
import { useOrder } from "./hooks/useOrder"
import OrderContents from './components/OrderContents';
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";

const App = () => {
  const { orders, subTotal, tipTotal, tip, addItem, deleteItem, setTip } = useOrder()
  return (
    <>
      <Header />

      <main className="container mx-auto px-5 md:px-0 my-10 md:grid md:grid-cols-2 gap-5">
        <div className="mb-5 md:mb-0 pt-5">
          <h2 className="text-4xl font-bold mb-5">Menú del día</h2>
          <div className="space-y-2">
            { menuItems.map(item => (
              <MenuItem key={item.id} item={item} addItem={addItem}/>
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-5">
          <OrderContents orders={orders} deleteItem={deleteItem}/>
          <TipPercentageForm setTip={setTip}/>
          <OrderTotals subTotal={subTotal} tipTotal={tipTotal}/>
        </div>
      </main>
    </>
  )
}

export default App
