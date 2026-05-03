'use client'

import Link from 'next/link'

export function Web3Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-[120px] py-[20px] font-general-sans">
      {/* Left side: Logo and Links */}
      <div className="flex items-center gap-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-white font-bold text-xl tracking-widest uppercase" style={{ width: '187px', height: '25px', display: 'flex', alignItems: 'center' }}>
            TECHED
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-[30px]">
          <Link href="/news" className="text-white text-[14px] font-medium flex items-center hover:text-white/80 transition-colors">
            Tech News
          </Link>
          <Link href="/research" className="text-white text-[14px] font-medium flex items-center hover:text-white/80 transition-colors">
            Research
          </Link>
          <Link href="/dashboard" className="text-white text-[14px] font-medium flex items-center hover:text-white/80 transition-colors">
            Dashboard
          </Link>
        </div>
      </div>

      {/* Right side: Button */}
      <Link href="/auth/login">
        <button className="pill-glow-dark text-white text-[14px] font-medium px-[29px] py-[11px] transition-transform hover:scale-105 active:scale-95">
          Login / Register
        </button>
      </Link>
    </nav>
  )
}
