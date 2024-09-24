import Image from 'next/image'
import React from 'react'

const Header = ({themeColor}) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo image */}
          {/* <Image src="/dummy-logo.png" alt="Logo" className="h-8 w-auto mr-2" width={100} height={100}/> */}
          {/* Dummy text for logo */}
          <span className="text-xl font-bold">Company Name</span>
        </div>
        <button 
          className="text-white font-bold py-2 px-4 rounded"
          style={{ 
            backgroundColor: themeColor,
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => {
            const darkenColor = (color, percent) => {
              const num = parseInt(color.replace("#", ""), 16),
                    amt = Math.round(2.55 * percent),
                    R = (num >> 16) - amt,
                    G = (num >> 8 & 0x00FF) - amt,
                    B = (num & 0x0000FF) - amt;
              return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
            };
            e.target.style.backgroundColor = darkenColor(themeColor, 10);
          }}
          onMouseLeave={(e) => e.target.style.backgroundColor = themeColor}
        >
          Login
        </button>
      </div>
    </header>
  )
}

export default Header
