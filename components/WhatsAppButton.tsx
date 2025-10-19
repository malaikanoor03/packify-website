'use client'

import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [showBadge, setShowBadge] = useState(true)

  useEffect(() => {
    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)

    // Hide tooltip after 10 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 13000)

    return () => {
      clearTimeout(tooltipTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  const hideTooltip = () => {
    setShowTooltip(false)
  }

  const handleClick = () => {
    setShowBadge(false)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start space-y-2">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white text-sm text-gray-700 rounded-lg shadow-md flex items-center gap-2 relative w-max max-w-[220px] animate-fade-in p-[10px]">
          Have questions? Chat with us!
          
          {/* Close Button */}
          <button
            onClick={hideTooltip}
            className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold shadow-sm"
          >
            &times;
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+12013052742?text=Hi%2C%20I'm%20interested%20in%20custom%20boxes%20and%20would%20like%20to%20know%20more."
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.72 13.06c-.29-.14-1.7-.83-1.96-.93-.26-.1-.45-.14-.63.14s-.72.93-.88 1.12c-.16.2-.32.22-.6.08-.29-.14-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.6-1.98-.17-.28-.02-.43.13-.57.14-.14.31-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.14-.63-1.52-.86-2.09-.23-.55-.46-.48-.63-.48s-.36-.02-.55-.02c-.2 0-.53.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.14.2 2.13 3.25 5.18 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.7-.7 1.94-1.38.24-.7.24-1.3.16-1.43-.08-.12-.26-.2-.54-.34z" />
        </svg>

        {/* Notification Badge */}
        {showBadge && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow">
            1
          </span>
        )}
      </a>
    </div>
  )
}