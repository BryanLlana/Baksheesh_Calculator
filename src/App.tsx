import Header from "./components/Header"
import MenuItem from "./components/MenuItem"
import { menuItems } from "./data"

const App = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto px-5 md:px-0 my-10 md:grid md:grid-cols-2 gap-5">
        <div>
          <h2 className="text-4xl font-bold mb-5">Menú del día</h2>
          <div className="space-y-2">
            { menuItems.map(item => (
              <MenuItem key={item.id} item={item}/>
            ))}
          </div>
        </div>
        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
