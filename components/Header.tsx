'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { User, LogOut, Settings, Package } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Types of Boxes', href: '#boxes' },
  { name: 'How it Works', href: '#it-works' },
  { name: 'Request a Quote', href: '#quote' },
]

const boxTypes = [
  { name: 'Mailer Boxes', href: '/products/mailer-boxes' },
  { name: 'Tuck Boxes', href: '/products/tuck-boxes' },
  { name: 'Rigid Boxes', href: '/products/rigid-boxes' },
  { name: 'Dispenser Boxes', href: '/products/dispenser-boxes' },
  { name: 'Cigarette Boxes', href: '/products/cigarette-boxes' },
  { name: 'Burger Boxes', href: '/products/burger-boxes' },
  { name: 'Magnetic Closure', href: '/products/magnetic-closure' },
  { name: 'Cosmetic Boxes', href: '/products/cosmetic-boxes' },
]

interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  // Check authentication status
  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/me')
      if (res.ok) {
        const data = await res.json()
        setUser(data.user)
      }
    } catch (error) {
      console.error('Auth check failed:', error)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      setUser(null)
      setUserMenuOpen(false)
      router.push('/')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  // Smooth scroll handler
  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo')
    if (scrollTo) {
      const el = document.querySelector(scrollTo)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [searchParams])

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (pathname === '/') {
        const el = document.querySelector(href)
        el?.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push(`/?scrollTo=${href}`)
      }
    } else {
      router.push(href)
    }
    setMobileMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md text-white shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between lg:px-[64px] lg:py-[18px]">

          {/* Logo */}
          <h1
            className="text-xl sm:text-2xl font-bold cursor-pointer select-none"
            onClick={() => handleNavClick('/')}
          >
            Packify<span className="text-orange-500">CustomBoxes</span>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 items-center font-medium">
            {navLinks.map((link) =>
              link.name === 'Types of Boxes' ? (
                <div key={link.name} className="group relative">
                  <button className="flex items-center gap-1 hover:text-orange-400 transition">
                    {link.name}
                    <svg
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                    {boxTypes.map((box) => (
                      <button
                        key={box.name}
                        onClick={() => handleNavClick(box.href)}
                        className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                      >
                        {box.name}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-orange-400 transition"
                >
                  {link.name}
                </button>
              )
            )}

            {/* User Menu / Auth Buttons */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition">
                  <User size={18} />
                  <span>{user.name}</span>
                </button>
                <div className="absolute right-0 mt-3 w-48 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                  {user.role === 'admin' && (
                    <button
                      onClick={() => router.push('/admin')}
                      className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                    >
                      <Settings size={16} />
                      Admin Panel
                    </button>
                  )}
                  <button
                    onClick={() => router.push('/orders')}
                    className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                  >
                    <Package size={16} />
                    My Orders
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 text-red-600"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setAuthModalOpen(true)}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition"
              >
                Login / Sign Up
              </button>
            )}
          </nav>

          {/* Hamburger Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10 p-2 rounded-md hover:bg-white/10 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed left-0 w-full bg-black/60 backdrop-blur-md text-white transition-all duration-500 overflow-hidden ${
            mobileMenuOpen ? 'opacity-100 max-h-[600px]' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center py-4 space-y-3 text-lg font-medium">
            {navLinks.map((link) =>
              link.name === 'Types of Boxes' ? (
                <div key={link.name} className="w-full">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex justify-center items-center gap-1 py-2 hover:text-orange-400 transition"
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="flex flex-col bg-white text-gray-800 rounded-lg overflow-hidden transition-all duration-300">
                      {boxTypes.map((box) => (
                        <button
                          key={box.name}
                          onClick={() => handleNavClick(box.href)}
                          className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                        >
                          {box.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full hover:text-orange-400 transition"
                >
                  {link.name}
                </button>
              )
            )}

            {/* Mobile Auth */}
            {user ? (
              <>
                {user.role === 'admin' && (
                  <button
                    onClick={() => {
                      router.push('/admin')
                      setMobileMenuOpen(false)
                    }}
                    className="block w-full hover:text-orange-400 transition"
                  >
                    Admin Panel
                  </button>
                )}
                <button
                  onClick={() => {
                    router.push('/orders')
                    setMobileMenuOpen(false)
                  }}
                  className="block w-full hover:text-orange-400 transition"
                >
                  My Orders
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-red-400 hover:text-red-300 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setAuthModalOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition"
              >
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      {authModalOpen && (
        <AuthModal
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          onClose={() => setAuthModalOpen(false)}
          onSuccess={(userData) => {
            setUser(userData)
            setAuthModalOpen(false)
          }}
        />
      )}
    </>
  )
}

// Auth Modal Component
function AuthModal({ 
  isLogin, 
  setIsLogin, 
  onClose, 
  onSuccess 
}: { 
  isLogin: boolean
  setIsLogin: (val: boolean) => void
  onClose: () => void
  onSuccess: (user: User) => void
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup'
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed')
      }

      onSuccess(data.user)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
              placeholder="••••••••"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800"
                placeholder="••••••••"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin)
              setError('')
            }}
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  )
}