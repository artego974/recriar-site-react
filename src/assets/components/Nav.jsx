import React, { useState } from 'react'
import NavOptions from './NavOptions'
import { House } from 'lucide-react'
import { LayoutDashboard } from 'lucide-react'
import { ChartColumn } from 'lucide-react'
import { Cog } from 'lucide-react'

const topOptions = [
  { icon: <House />, label: 'Home' },
  { icon: <LayoutDashboard />, label: 'Dashboard', active: true },
  { icon: <ChartColumn/>, label: 'Statistics' },
  { icon: <Cog />, label: 'Settings' },
]

const midOptions = [
  { icon: '💬', label: 'Slack' },
  { icon: '✅', label: 'Click Up' },
  { icon: '➕', label: 'Add new plugin' },
]

function Nav() {
  const [isDark, setIsDark] = useState(true)

  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-64 flex flex-col px-4 py-6 transition-colors duration-300
        ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'}`}
    >
     
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="w-8 h-8 rounded-md bg-lime-400 flex items-center justify-center font-black text-neutral-900 text-sm">
          <img src="./logo.png" alt="logo" />
        </div>
        <span className={`text-sm font-bold tracking-widest uppercase transition-colors duration-300
          ${isDark ? 'text-white' : 'text-neutral-900'}`}>
          Teamview
        </span>
      </div>


      <div className="flex-1 flex flex-col gap-6">
        <NavOptions options={topOptions} isDark={isDark} />

        {/* Div 3 — Integrações */}
        <div>
          <p className={`text-xs font-semibold tracking-widest uppercase px-3 mb-2 transition-colors duration-300
            ${isDark ? 'text-lime-400' : 'text-lime-600'}`}>
            Integration
          </p>
          <NavOptions options={midOptions} isDark={isDark} />
        </div>
      </div>

      {/* Div 4 — Toggle Light / Dark */}
<div className="flex items-center justify-center gap-4 mt-8 mb-4">
  {/* Texto Light */}
  <span className={`text-xs transition-colors duration-300 ${isDark ? 'text-neutral-400' : 'text-neutral-800 font-medium'}`}>
    Light
  </span>

  {/* Botão Toggle */}
  <button
    onClick={() => setIsDark(!isDark)}
    className={`relative flex items-center w-[60px] h-[30px] rounded-full transition-colors duration-300 cursor-pointer border
      ${isDark ? 'bg-[#3b3b3b] border-neutral-600' : 'bg-neutral-200 border-neutral-300'}`}
  >
    {/* Ícone de Sol (Fica à esquerda) */}
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      className="absolute left-[8px] w-[14px] h-[14px] text-neutral-400"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 21v-2.25m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    </svg>

    {/* Círculo do Toggle (Knob) */}
    <span
      className={`absolute w-[22px] h-[22px] rounded-full transition-all duration-300 shadow-sm
        ${isDark ? 'translate-x-[34px] bg-[#a6f026]' : 'translate-x-[4px] bg-white'}`}
    />
  </button>

    {/* Texto Dark */}
    <span className={`text-xs transition-colors duration-300 ${isDark ? 'text-white font-medium' : 'text-neutral-400'}`}>
      Dark
    </span>
  </div>
    </aside>
  )
}

export default Nav