import React from 'react'

function NavOption({ icon, label, active, isDark }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
        ${active
          ? 'bg-lime-400 text-neutral-900'
          : isDark
            ? 'text-neutral-400 hover:text-white hover:bg-neutral-700'
            : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200'
        }`}
    >
      <span className="text-base">{icon}</span>
      <span>{label}</span>
    </a>
  )
}

function NavOptions({ options, isDark }) {
  return (
    <nav className="flex flex-col gap-1">
      {options.map((option) => (
        <NavOption
          key={option.label}
          icon={option.icon}
          label={option.label}
          active={option.active}
          isDark={isDark}
        />
      ))}
    </nav>
  )
}

export default NavOptions