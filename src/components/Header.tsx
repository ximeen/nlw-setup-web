import { Plus } from "phosphor-react"
import Logo from "/logo.svg"


export function Header() {
  return (
    <header className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={Logo} alt="Logo da aplicação, com nome habits e alguns quadrados acima dele" />

      <button
        type="button"
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:scale-[1.05] transition-all duration-200 "
      >
        <Plus size={20} className="text-violet-500" />
        Novo hábito
      </button>
    </header>
  )
}