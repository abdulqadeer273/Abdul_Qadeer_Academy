import Image from 'next/image'
import React, { useState } from 'react'
import image from '../assets/images/course.png'
const Coursesection = ({themeColor}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ 
      display: 'flex', 
      padding: '60px', 
      backgroundColor: 'white',
      maxWidth: '1200px',
      margin: '0 auto',
      alignItems: 'center' // This centers the children vertically
    }}>
      {/* Left side - Image */}
      <div style={{ flex: 1, marginRight: '40px' }}>
      <Image 
          src={image}
          alt="Course Image" 
          quality={100} 
          width={500}
          height={500}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />    
      </div>

      {/* Right side - Content */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', // This centers the content vertically within this div
        alignItems: 'center',
        marginLeft: '40px'
      }}>
        <h2 style={{ 
          fontSize: '28px', 
          fontWeight: 700, 
          marginBottom: '30px', 
          textAlign: 'center', 
          color: themeColor 
        }}>
          What You Will Learn In This Master Class
        </h2>
        
        {/* 6 small divs in 3 rows */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px', width: '100%' }}>
          {[...Array(6)].map((_, index) => (
            <div key={index} style={{ 
              backgroundColor: '#f0f0f0', 
              padding: '15px', 
              borderRadius: '8px',
              fontSize: '16px',
              color: themeColor
            }}>
              Learning Point {index + 1}
            </div>
          ))}
        </div>

        {/* Reserve your seat button */}
        <button
          style={{
            position: 'relative',
            backgroundColor: themeColor,
            color: 'white',
            padding: '15px 30px',
            fontSize: '18px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            alignSelf: 'center',
            overflow: 'hidden',
            transition: 'color 0.5s ease',
            zIndex: 1,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span style={{
            position: 'relative',
            zIndex: 2,
            color: isHovered ? themeColor : 'white',
            transition: 'color 0.5s ease',
          }}>
            Reserve Your Seat
          </span>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `radial-gradient(circle, white ${isHovered ? '150%' : '0%'}, transparent 0%)`,
              transition: 'all 0.5s ease',
              zIndex: 1,
            }}
          />
        </button>
      </div>
    </div>
  )
}

export default Coursesection
