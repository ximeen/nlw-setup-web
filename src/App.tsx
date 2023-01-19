import { Header } from "./components/Header"
import { SummaryTable } from "./components/SumaryTable"

function App() {

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </main>
  )
}

export default App
