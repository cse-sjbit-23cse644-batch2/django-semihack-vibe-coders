'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { User as SupabaseUser } from '@supabase/supabase-js'

export function Web3Navbar({ user }: { user?: SupabaseUser | null }) {
  const router = useRouter()

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

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

        <div className="hidden md:flex items-center gap-[30px]">
          <Link href="/news" className="text-white text-[14px] font-medium flex items-center hover:text-white/80 transition-colors">
            Tech News
          </Link>
          <Link href="/research" className="text-white text-[14px] font-medium flex items-center hover:text-white/80 transition-colors">
            Research Articles
          </Link>
          {user && (
            <Link href="/dashboard" className="text-white text-[14px] font-medium flex items-center hover:text-white/80 transition-colors">
              Dashboard
            </Link>
          )}
        </div>
      </div>

      {/* Right side: Button */}
      {user ? (
        <button onClick={handleSignOut} className="pill-glow-dark text-white text-[14px] font-medium px-[29px] py-[11px] transition-transform hover:scale-105 active:scale-95">
          Sign Out
        </button>
      ) : (
        <Link href="/auth/login">
          <button className="pill-glow-dark text-white text-[14px] font-medium px-[29px] py-[11px] transition-transform hover:scale-105 active:scale-95">
            Login or Sign Up
          </button>
        </Link>
      )}
    </nav>
  )
}
