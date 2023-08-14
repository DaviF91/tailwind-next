import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img src="https://github.com/DaviF91.png" alt="" className="h-10 w-10 rounded-full" />
      <div className="flex flex-1 flex-col truncate">
          <span className="text-sm font-semibold text-zinc-700">Davi Ferreira</span>
          <span className="truncate text-sm text-zinc-500">daviferreiraaew@gmail.com</span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-violet-50 rounded-md">
        <LogOut className="w-5 h-5 text-zinc-500 hover:bg-violet-50" />
      </button>
    </div>
    
  )
}