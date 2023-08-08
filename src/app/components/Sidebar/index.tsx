import { Logo } from "./Logo";
import { Search, Home, BarChart, SquareStack, CheckSquare, Flag, Users, LifeBuoy, Cog } from "lucide-react" //biblioteca de icones  npm i lucide-react 

import { NavItem } from "./NavItem";


export function Sidebar() {
  return (
    <aside className='flex flex-col gap-6 border-r border-zinc-200 px-5 py-8'>
      <Logo />

      <div className="flex mx-1 w-full items-center gap-2 rounded-lg border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600" type="text" placeholder="Search" />
      </div>

      <nav className="space-y-0.5 ">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack } />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>
        
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5 ">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <div className="flex flex-col gap-4 rounded-lg bg-violet-50 py-5 px-4 ">
          <div className="space-y-1"></div>
            <span className="text-sm/5 font-medium text-violet-700">Used space</span>
            <p className="text-sm/5 text-violet-500">Your team has used 80% of your available space. Need more?</p>
        </div>

        <div className="h-2 rounded-full bg-violet-100">
          <div className="h-2 w-4/5 rounded-full bg-violet-600"/>
        </div>

        <div className="spac-x-3">
          <button type="button" className="text-sm font-medium text-violet-500 hover:text-violet-600">
            Dismiss
          </button>
          <button type="button" className="text-sm font-medium text-violet-700 hover:text-violet-900">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  )
}