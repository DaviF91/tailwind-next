import { Logo } from "./Logo";
import { Search, Home, BarChart, SquareStack, CheckSquare, Flag, Users, LifeBuoy, Cog } from "lucide-react" //biblioteca de icones  npm i lucide-react 

import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";


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

        <UsedSpaceWidget />
        
        <div className="h-px bg-zinc-200"></div>

        <Profile />
      </div>
    </aside>
  )
}