import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form action="" className="w-full flex flex-col mt-6">
      <label
        className="font-semibold leading-tight"
        htmlFor="title">
        Qual o seu comprometimento
      </label>

      <input
        className="p-4 rounded-lg mt-12 bg-zinc-800 text-white placeholder:text-zinc-400"
        type="text"
        id="title"
        placeholder="Ex: exercicios, dormir bem etc.."
        autoFocus />

      <label
        className="font-semibold leading-tight mt-4"
        htmlFor="">
        Qual a recorrência?
      </label>

      <button
        className="mt-6 rounded-lg p-4 gap-3 flex justify-center items-center font-semibold bg-green-700 hover:bg-green-500 transition-all duration-150"
        type="submit">
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  )
}