import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FolderSpecial as ArchiveIconMUI,
  RocketLaunch as WorkIconMUI
} from "@mui/icons-material";

export function AboutIcon() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '60px',
        position: 'relative',
        transform: 'translateY(-8px)'
      }}
    >
      {/* Custom SVG icon that pops out and becomes bigger */}
      <motion.div
          className="skeletonImg"
          style={{
            transition: 'transform 0.4s ease',
            filter: isHovered ? 'drop-shadow(0 0 15px currentColor) drop-shadow(0 0 25px currentColor)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: isHovered ? 10 : 1
          }}
          animate={isHovered ? {
            x: [0, -15, 15, -15, 0],
            y: [0, -25, -20, -25, 0],
            rotate: [0, -15, 15, -15, 0],
            scale: [1, 1.8, 1.7, 1.8, 1]
          } : {
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          <motion.svg
            width="55"
            height="55"
            viewBox="0 0 84 112"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              color: 'currentColor',
              transform: isHovered ? 'scale(1.5)' : 'scale(1)',
              transition: 'transform 0.4s ease'
            }}
          >
            <path d="M77.86,58.66h.19c3.6-9.27,4.87-19,4.83-25.53-.1-16.03-19.18-28.92-39.62-28.91C22.81,4.45,3.81,17.57,3.91,33.6c.04,6.53,1.5,16.25,5.21,25.47h.12c-.37.79-.77,1.58-1.26,2.39-3.09,5.15-.56,12.72,7.06,15.09l.14,23.87,21.1,10,15.41-.09,20.98-10.25-.14-23.92h-.14c7.49-2.51,9.93-10.07,6.75-15.12-.5-.79-.91-1.58-1.28-2.37Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M42.99,4.21c.09,0,.18,0,.27,0,.09,0,.18,0,.27,0h-.53Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M75.7,56.37l.13.05c3.39-8.75,4.97-18.57,4.92-25.64-.02-3.96-1.28-7.82-3.59-11.48-2.19-3.46-4.69-6.59-8.59-9.3C60.91,4.7,50.92,1.64,41.07,1.58c-.01,0-.03,0-.05,0h-.53s-.03,0-.04,0c-9.85.18-19.66,3.57-27.24,8.97-3.87,2.75-6.33,5.7-8.48,9.18-2.27,3.69-3.63,7.57-3.6,11.52.04,7.07,1.73,16.87,5.23,25.58l.04-.02c-.34.71-.72,1.42-1.15,2.14-1.61,2.68-1.76,6.07-.41,9.07,1.35,3,4,5.26,7.43,6.39l.14,23.66c0,.1.05.19.13.24l21.1,10s.1.05.16.05l15.41-.09c.06,0,.11-.02.16-.05l20.98-10.25c.08-.05.13-.15.13-.25l-.14-23.75c3.31-1.2,5.85-3.47,7.12-6.44,1.3-3.01,1.09-6.38-.56-9.01-.45-.72-.85-1.44-1.2-2.16Z" fill="var(--bg-color)"></path>
            <polyline points="70.1 73.87 70.24 97.79 49.27 108.04 33.85 108.13 12.76 98.13 12.61 74.21" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polyline>
            <path d="M75.14,57.14c3.88-9.26,5.34-19.77,5.3-26.3-.1-16.1-19.34-29.04-39.89-28.91h.53C20.55,2.04,1.38,15.21,1.48,31.31c.04,6.53,1.72,16.98,5.58,26.23" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M8.43,41.16s2.86,8.44-2.88,18.01c-3.32,5.53-.17,13.84,8.81,15.53,8.97,1.69,8.85,11.5,8.85,11.5" fill="var(--bg-color)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M73.61,40.77s-2.44,9.16,3.09,17.97c3.43,5.46.33,13.84-8.62,15.63-8.95,1.8-8.72,11.61-8.72,11.61" fill="var(--bg-color)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M37.19,87.56l-.03-4.84c0-1.13.91-2.06,2.04-2.07h0c1.13,0,2.06.91,2.07,2.04l.03,4.77-4.11.1Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M41.3,87.53l-.03-4.84c0-1.13.91-2.06,2.04-2.07h0c1.13,0,2.06.91,2.07,2.04l.03,4.77-4.11.1Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M45.41,87.51l-.02-4.1c0-1.13.91-2.06,2.04-2.07h0c1.13,0,2.06.91,2.07,2.04l.02,4.03-4.11.1Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M49.52,87.26l-.02-3.37c0-1.13.91-2.06,2.04-2.07h0c1.13,0,2.06.91,2.07,2.04l.02,3.29-4.11.1Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M53.62,86.57v-2.5c-.02-.84.66-1.53,1.5-1.53h0c.84,0,1.53.68,1.53,1.51v2.44s-3.03.07-3.03.07Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M56.82,86.04v-2.09c-.02-.7.55-1.28,1.26-1.29h0c.7,0,1.28.57,1.29,1.27v2.05s-2.54.06-2.54.06Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M37.19,87.56l-.02-4.1c0-1.13-.94-2.05-2.07-2.04h0c-1.13,0-2.05.94-2.04,2.07l.02,4.03,4.11.05Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M33.08,87.36l-.02-3.37c0-1.13-.94-2.05-2.07-2.04h0c-1.13,0-2.05.94-2.04,2.07l.02,3.29,4.11.05Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M28.97,86.71v-2.5c-.02-.84-.71-1.52-1.55-1.51h0c-.84,0-1.52.69-1.51,1.53v2.44s3.06.04,3.06.04Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M25.77,86.23v-2.09c-.02-.7-.59-1.27-1.3-1.27h0c-.7,0-1.27.58-1.27,1.29v2.05s2.57.03,2.57.03Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M45.41,87.51l.03,4.84c0,1.13-.91,2.06-2.04,2.07h0c-1.13,0-2.06-.91-2.07-2.04l-.03-4.77,4.11-.1Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M41.3,87.53l.03,4.84c0,1.13-.91,2.06-2.04,2.07h0c-1.13,0-2.06-.91-2.07-2.04l-.03-4.77,4.11-.1Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M37.19,87.56l.02,4.1c0,1.13-.91,2.06-2.04,2.07h0c-1.13,0-2.06-.91-2.07-2.04l-.02-4.03,4.11-.1Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M33.08,87.36l.02,3.37c0,1.13-.91,2.06-2.04,2.07h0c-1.13,0-2.06-.91-2.07-2.04l-.02-3.29,4.11-.1Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M28.97,86.71v2.48c.02.83-.66,1.52-1.5,1.52h0c-.84,0-1.53-.67-1.53-1.5v-2.43s3.03-.07,3.03-.07Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M25.77,86.23v2.09c.02.7-.55,1.28-1.26,1.29h0c-.7,0-1.28-.57-1.29-1.27v-2.05s2.54-.06,2.54-.06Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M45.41,87.51l.02,4.1c0,1.13.94,2.05,2.07,2.04h0c1.13,0,2.05-.94,2.04-2.07l-.02-4.03-4.11-.05Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M49.52,87.26l.02,3.37c0,1.13.94,2.05,2.07,2.04h0c1.13,0,2.05-.94,2.04-2.07l-.02-3.29-4.11-.05Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M53.62,86.57v2.5c.02.84.71,1.52,1.55,1.51h0c.84,0,1.52-.69,1.51-1.53v-2.44s-3.06-.04-3.06-.04Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <path d="M56.82,86.04v2.09c.02.7.59,1.27,1.3,1.27h0c.7,0,1.27-.58,1.27-1.29v-2.05s-2.57-.03-2.57-.03Z" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
            <line x1="25.88" y1="80.15" x2="25.9" y2="83.56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
            <line x1="28.93" y1="80.13" x2="28.95" y2="83.54" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
            <line x1="53.66" y1="79.98" x2="53.68" y2="83.39" fill="var(--bg-color)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
            <line x1="56.71" y1="79.96" x2="56.73" y2="83.37" fill="var(--bg-color)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
            <line x1="33.03" y1="79.2" x2="33.06" y2="83.51" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
            <line x1="37.14" y1="79.18" x2="37.17" y2="83.49" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
            <line x1="45.36" y1="79.13" x2="45.39" y2="83.44" fill="var(--bg-color)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
            <line x1="49.47" y1="79.1" x2="49.5" y2="83.42" fill="var(--bg-color)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
            <line x1="41.24" y1="78.08" x2="41.28" y2="83.47" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
            <path d="M34.55,48.97c-1.44-3.71-5.26-5.01-8.97-5-3.72.01-8.32,1.04-9.65,5.03-.5,1.5-1.39,10.82,4.21,11.54,8.12,2.13,10.71-.68,11.3-2.16,4.7.1,3.78-7.67,3.1-9.41Z" fill="currentColor"></path>
            <path d="M50.96,44.33c-3.9,1.35-5.09,6.54-3.14,10.33.88,1.7,2.38,3.01,4.16,3.69.98.38,2.03.56,2.72,1.41.66.81,1.27,1.37,2.29,1.74,6.65,2.39,8.96-3.43,9.59-5.27,1.25-3.65-.52-17.12-15.62-11.91Z" fill="currentColor"></path>
            <path d="M38.01,73.5c1.75.26,3.04-1.64,3.81-1.9.84-.29,2.68.64,3.81.4s1.98-3.64,1.97-5.91c-.03-4.86-3.88-8.79-6.55-8.77s-6.34,3.98-6.32,8.85c.02,3.08,2.54,7.23,3.29,7.34Z" fill="currentColor"></path>
            <path d="M56.58,64.03s.01.03,0,0c0,0,0,0,0,0ZM56.61,64.07s0-.01-.01-.02c.01.02,0,.01.01.02ZM56.58,64.03s0,0,0-.02c0,0,0,0,0,0,0,0,0,.01,0,.02ZM56.62,64.09s0-.01-.01-.02c0,0,0,.01.01.02
            Z" fill="currentColor"></path>
          </motion.svg>
        </motion.div>
    </motion.div>
  );
}

export function WorkIcon() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlying, setIsFlying] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Trigger launch after a brief delay
    setTimeout(() => {
      setIsFlying(true);
      // Reset after animation
      setTimeout(() => {
        setIsFlying(false);
        setIsHovered(false);
      }, 2000);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (!isFlying) {
      setIsHovered(false);
    }
  };

  return (
    <>
      {/* Flying rocket - appears when launched */}
      {isFlying && (
        <motion.div
          initial={{ 
            x: 0, 
            y: 0, 
            rotate: 0, 
            scale: 1,
            opacity: 1
          }}
          animate={{
            x: '100vw',
            y: '-50vh',
            rotate: 45,
            scale: [1, 1.8, 0.5],
            opacity: [1, 1, 0]
          }}
          transition={{
            duration: 2,
            ease: "easeIn"
          }}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            zIndex: 10000,
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <WorkIconMUI 
            sx={{ 
              fontSize: 50,
              color: 'currentColor',
              filter: 'drop-shadow(0 0 20px currentColor) drop-shadow(0 0 30px currentColor)'
            }} 
          />
        </motion.div>
      )}
      
      {/* Static rocket with hover effects */}
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50px',
          height: '50px',
          position: 'relative',
          opacity: isFlying ? 0 : 1,
          transition: 'opacity 0.3s ease'
        }}
      >
        {/* Rocket exhaust flames */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '10px',
              backgroundColor: 'currentColor',
              opacity: 0,
              borderRadius: '50%',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            animate={isHovered && !isFlying ? {
              y: [0, 20],
              opacity: [0, 0.9, 0],
              scale: [0.3, 1.5, 0],
              x: [(i - 3.5) * 4, (i - 3.5) * 8]
            } : {}}
            transition={{
              duration: 0.6,
              repeat: isHovered && !isFlying ? Infinity : 0,
              delay: i * 0.06,
              ease: "easeOut"
            }}
          />
        ))}
        
        <motion.div
          animate={isHovered && !isFlying ? {
            y: [0, -8, 8, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.15, 1]
          } : {}}
          transition={{ duration: 0.6, repeat: isHovered && !isFlying ? Infinity : 0, ease: "easeInOut" }}
        >
          <WorkIconMUI 
            sx={{ 
              fontSize: 50,
              color: 'currentColor',
              filter: isHovered && !isFlying ? 'drop-shadow(0 0 12px currentColor) drop-shadow(0 0 20px currentColor)' : 'none',
              transition: 'filter 0.3s ease, transform 0.3s ease',
              transform: 'rotate(0deg)'
            }} 
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export function ArchiveIcon() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={isHovered ? { 
        scale: [1, 1.2, 1],
      } : {}}
      transition={{ duration: 0.6 }}
      style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        position: 'relative'
      }}
    >
      {/* Floating document particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '6px',
            height: '8px',
            backgroundColor: 'currentColor',
            opacity: 0,
            borderRadius: '1px'
          }}
          animate={isHovered ? {
            x: [0, (Math.random() - 0.5) * 40],
            y: [0, (Math.random() - 0.5) * 40 - 10],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            rotate: [0, 360]
          } : {}}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            delay: i * 0.2,
            ease: "easeOut"
          }}
        />
      ))}
      <motion.div
        animate={isHovered ? {
          scale: [1, 1.15, 1],
        } : {}}
        transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }}
      >
        <ArchiveIconMUI 
          sx={{ 
            fontSize: 50,
            color: 'currentColor',
            filter: isHovered ? 'drop-shadow(0 0 12px currentColor) drop-shadow(0 0 20px currentColor)' : 'none',
            transition: 'filter 0.3s ease'
          }} 
        />
      </motion.div>
    </motion.div>
  );
}

export function ProjectsIcon() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={isHovered ? { 
        scale: [1, 1.3, 0.9, 1.2, 1],
        rotate: [0, -15, 15, -20, 20, 0],
      } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        position: 'relative'
      }}
    >
      {/* Thought bubble particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: `${4 + i * 0.5}px`,
            height: `${4 + i * 0.5}px`,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
            opacity: 0
          }}
          animate={isHovered ? {
            x: [0, Math.cos(i * 45 * Math.PI / 180) * 35],
            y: [0, Math.sin(i * 45 * Math.PI / 180) * 35],
            opacity: [0, 0.9, 0],
            scale: [0, 1.5, 0]
          } : {}}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            delay: i * 0.1,
            ease: "easeOut"
          }}
        />
      ))}
      <motion.div
        animate={isHovered ? {
          rotate: [0, -12, 12, -12, 12, 0],
          scale: [1, 1.2, 0.95, 1.15, 1],
          y: [0, -5, 5, -3, 3, 0]
        } : {}}
        transition={{ duration: 0.7, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }}
        style={{
            filter: isHovered ? 'drop-shadow(0 0 12px currentColor) drop-shadow(0 0 20px currentColor)' : 'none',
            transition: 'filter 0.3s ease'
          }} 
      >
        <motion.svg
          width="50"
          height="50"
          viewBox="0 0 126 96"
          fill="#ccff00"
          xmlns="http://www.w3.org/2000/svg"
          style={{
           
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        position: 'relative'
          }}
        >
          <path d="M125,86.8l-10.89-24.05c0-.55-.27-1.02-.67-1.28V4.71c0-.82-.61-1.49-1.35-1.49H17.47c-.74,0-1.35.67-1.35,1.49v56.74c-.42.25-.7.74-.7,1.3l-10.21,24.05c0,.07.01.15.02.22h-.02v5.06c0,.82.6,1.49,1.34,1.49h117.12c.74,0,1.34-.67,1.34-1.49v-4.9h-.05c.03-.12.05-.25.05-.38Z" fill="var(--text-color)" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
          <path d="M13.8,58.81V2.49c0-.82.61-1.49,1.35-1.49h94.62c.74,0,1.35.67,1.35,1.49v56.32" fill="var(--text-color)" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
          <path d="M122.68,84.96v4.9c0,.82-.6,1.49-1.34,1.49H4.22c-.74,0-1.34-.67-1.34-1.49v-5.06" fill="var(--text-color)" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
          <path d="M121.34,86.07H4.22c-.74,0-1.34-.67-1.34-1.49l10.21-24.05c0-.82.6-1.49,1.34-1.49h96.02c.74,0,1.34.67,1.34,1.49l10.89,24.05c0,.82-.6,1.49-1.34,1.49Z" fill="var(--bg-color)" stroke="currentColor" strokeLinejoin="round"></path>
          <path d="M2.88,86.92v-2.34s10.21-24.05,10.21-24.05l.7-1.72" fill="var(--bg-color)" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
          <path d="M111.12,58.81l.67,1.72,10.89,24.05v2.25" fill="#ccff00" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
          <rect x="19.35" y="6.76" width="86.2" height="46.29" rx="3.01" ry="3.01" fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></rect>
          <path d="M79.51,80.99h-36.3c-.63,0-1.15-.85-1.15-1.9l1.72-7.26c0-1.04.52-1.9,1.15-1.9h32.85c.63,0,1.15.85,1.15,1.9l1.72,7.26c0,1.04-.52,1.9-1.15,1.9Z" fill="var(--bg-color)" stroke="currentColor" strokeLinejoin="round"></path>
          {/* Text paths - first row */}
          <path d="M29.32,22.36c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33h2.04c.42,0,.73.11.96.33.22.22.33.53.33.94v.21c0,.35-.11.63-.33.82.42.23.62.66.62,1.27v.27c0,.48-.13.85-.38,1.1-.25.25-.62.38-1.1.38h-2.15ZM29.65,19.16h1.86c.19,0,.32-.06.39-.18.07-.12.1-.27.1-.45v-.21c0-.23-.05-.39-.14-.48-.09-.09-.26-.13-.49-.13h-1.72v1.45ZM29.65,21.71h1.82c.29,0,.51-.06.63-.19s.19-.33.19-.62v-.27c0-.29-.06-.5-.18-.62-.12-.12-.34-.19-.64-.19h-1.82v1.89Z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M34.59,22.36c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33s.33.11.33.33v4.32h2.17c.22,0,.33.11.33.33s-.11.33-.33.33h-2.5Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M38.25,22.33c-.21-.08-.27-.22-.19-.43l1.86-4.59c.08-.17.2-.26.37-.26h.02c.17,0,.29.09.34.26l1.9,4.59c.08.21.02.35-.18.43-.21.08-.35.02-.43-.18l-.42-1.03h-2.44l-.4,1.03c-.08.2-.22.26-.42.18ZM39.33,20.47h1.91l-.98-2.37-.94,2.37Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M44.04,22.36c-.09,0-.16-.03-.23-.1-.07-.07-.1-.14-.1-.23v-4.65c0-.09.03-.16.1-.23s.14-.1.23-.1.16.03.23.1c.07.07.1.14.1.23v1.97h3.2v-1.97c0-.09.03-.16.1-.23.07-.07.14-.1.23-.1s.16.03.23.1c.07.07.1.14.1.23v4.65c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1s-.17-.03-.23-.1c-.07-.07-.1-.14-.1-.23v-2.03h-3.2v2.03c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M52.64,22.36c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33h2.04c.42,0,.73.11.96.33.22.22.33.53.33.94v.21c0,.35-.11.63-.33.82.42.23.62.66.62,1.27v.27c0,.48-.13.85-.38,1.1-.25.25-.62.38-1.1.38h-2.15ZM52.97,19.16h1.86c.19,0,.32-.06.39-.18.07-.12.1-.27.1-.45v-.21c0-.23-.05-.39-.14-.48-.09-.09-.26-.13-.49-.13h-1.72v1.45ZM52.97,21.71h1.82c.29,0,.51-.06.63-.19s.19-.33.19-.62v-.27c0-.29-.06-.5-.18-.62-.12-.12-.34-.19-.64-.19h-1.82v1.89Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M57.92,22.36c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33s.33.11.33.33v4.32h2.17c.22,0,.33.11.33.33s-.11.33-.33.33h-2.5Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M61.57,22.33c-.21-.08-.27-.22-.19-.43l1.86-4.59c.08-.17.2-.26.37-.26h.02c.17,0,.29.09.34.26l1.9,4.59c.08.21.02.35-.18.43-.21.08-.35.02-.43-.18l-.42-1.03h-2.44l-.4,1.03c-.08.2-.22.26-.42.18ZM62.66,20.47h1.91l-.98-2.37-.94,2.37Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M67.37,22.36c-.09,0-.16-.03-.23-.1-.07-.07-.1-.14-.1-.23v-4.65c0-.09.03-.16.1-.23s.14-.1.23-.1.16.03.23.1c.07.07.1.14.1.23v1.97h3.2v-1.97c0-.09.03-.16.1-.23.07-.07.14-.1.23-.1s.16.03.23.1c.07.07.1.14.1.23v4.65c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1s-.17-.03-.23-.1c-.07-.07-.1-.14-.1-.23v-2.03h-3.2v2.03c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M75.97,22.36c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33h2.04c.42,0,.73.11.96.33.22.22.33.53.33.94v.21c0,.35-.11.63-.33.82.42.23.62.66.62,1.27v.27c0,.48-.13.85-.38,1.1-.25.25-.62.38-1.1.38h-2.15ZM76.3,19.16h1.86c.19,0,.32-.06.39-.18.07-.12.1-.27.1-.45v-.21c0-.23-.05-.39-.14-.48-.09-.09-.26-.13-.49-.13h-1.72v1.45ZM76.3,21.71h1.82c.29,0,.51-.06.63-.19s.19-.33.19-.62v-.27c0-.29-.06-.5-.18-.62-.12-.12-.34-.19-.64-.19h-1.82v1.89Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M81.24,22.36c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33s.33.11.33.33v4.32h2.17c.22,0,.33.11.33.33s-.11.33-.33.33h-2.5Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M84.9,22.33c-.21-.08-.27-.22-.19-.43l1.86-4.59c.08-.17.2-.26.37-.26h.02c.17,0,.29.09.34.26l1.9,4.59c.08.21.02.35-.18.43-.21.08-.35.02-.43-.18l-.42-1.03h-2.44l-.4,1.03c-.08.2-.22.26-.42.18ZM85.99,20.47h1.91l-.98-2.37-.94,2.37Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M90.7,22.36c-.09,0-.16-.03-.23-.1-.07-.07-.1-.14-.1-.23v-4.65c0-.09.03-.16.1-.23s.14-.1.23-.1.16.03.23.1c.07.07.1.14.1.23v1.97h3.2v-1.97c0-.09.03-.16.1-.23.07-.07.14-.1.23-.1s.16.03.23.1c.07.07.1.14.1.23v4.65c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1s-.17-.03-.23-.1c-.07-.07-.1-.14-.1-.23v-2.03h-3.2v2.03c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          {/* Text paths - second row */}
          <path d="M29.32,31.82c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33h2.04c.42,0,.73.11.96.33.22.22.33.53.33.94v.21c0,.35-.11.63-.33.82.42.23.62.66.62,1.27v.27c0,.48-.13.85-.38,1.1-.25.25-.62.38-1.1.38h-2.15ZM29.65,28.61h1.86c.19,0,.32-.06.39-.18.07-.12.1-.27.1-.45v-.21c0-.23-.05-.39-.14-.48-.09-.09-.26-.13-.49-.13h-1.72v1.45ZM29.65,31.16h1.82c.29,0,.51-.06.63-.19s.19-.33.19-.62v-.27c0-.29-.06-.5-.18-.62-.12-.12-.34-.19-.64-.19h-1.82v1.89Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M34.59,31.82c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33s.33.11.33.33v4.32h2.17c.22,0,.33.11.33.33s-.11.33-.33.33h-2.5Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M38.25,31.78c-.21-.08-.27-.22-.19-.43l1.86-4.59c.08-.17.2-.26.37-.26h.02c.17,0,.29.09.34.26l1.9,4.59c.08.21.02.35-.18.43-.21.08-.35.02-.43-.18l-.42-1.03h-2.44l-.4,1.03c-.08.2-.22.26-.42.18ZM39.33,29.92h1.91l-.98-2.37-.94,2.37Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M44.04,31.82c-.09,0-.16-.03-.23-.1-.07-.07-.1-.14-.1-.23v-4.65c0-.09.03-.16.1-.23s.14-.1.23-.1.16.03.23.1c.07.07.1.14.1.23v1.97h3.2v-1.97c0-.09.03-.16.1-.23.07-.07.14-.1.23-.1s.16.03.23.1c.07.07.1.14.1.23v4.65c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1s-.17-.03-.23-.1c-.07-.07-.1-.14-.1-.23v-2.03h-3.2v2.03c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M52.64,31.82c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33h2.04c.42,0,.73.11.96.33.22.22.33.53.33.94v.21c0,.35-.11.63-.33.82.42.23.62.66.62,1.27v.27c0,.48-.13.85-.38,1.1-.25.25-.62.38-1.1.38h-2.15ZM52.97,28.61h1.86c.19,0,.32-.06.39-.18.07-.12.1-.27.1-.45v-.21c0-.23-.05-.39-.14-.48-.09-.09-.26-.13-.49-.13h-1.72v1.45ZM52.97,31.16h1.82c.29,0,.51-.06.63-.19s.19-.33.19-.62v-.27c0-.29-.06-.5-.18-.62-.12-.12-.34-.19-.64-.19h-1.82v1.89Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M57.92,31.82c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33s.33.11.33.33v4.32h2.17c.22,0,.33.11.33.33s-.11.33-.33.33h-2.5Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M61.57,31.78c-.21-.08-.27-.22-.19-.43l1.86-4.59c.08-.17.2-.26.37-.26h.02c.17,0,.29.09.34.26l1.9,4.59c.08.21.02.35-.18.43-.21.08-.35.02-.43-.18l-.42-1.03h-2.44l-.4,1.03c-.08.2-.22.26-.42.18ZM62.66,29.92h1.91l-.98-2.37-.94,2.37Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M67.37,31.82c-.09,0-.16-.03-.23-.1-.07-.07-.1-.14-.1-.23v-4.65c0-.09.03-.16.1-.23s.14-.1.23-.1.16.03.23.1c.07.07.1.14.1.23v1.97h3.2v-1.97c0-.09.03-.16.1-.23.07-.07.14-.1.23-.1s.16.03.23.1c.07.07.1.14.1.23v4.65c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1s-.17-.03-.23-.1c-.07-.07-.1-.14-.1-.23v-2.03h-3.2v2.03c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M75.97,31.82c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33h2.04c.42,0,.73.11.96.33.22.22.33.53.33.94v.21c0,.35-.11.63-.33.82.42.23.62.66.62,1.27v.27c0,.48-.13.85-.38,1.1-.25.25-.62.38-1.1.38h-2.15ZM76.3,28.61h1.86c.19,0,.32-.06.39-.18.07-.12.1-.27.1-.45v-.21c0-.23-.05-.39-.14-.48-.09-.09-.26-.13-.49-.13h-1.72v1.45ZM76.3,31.16h1.82c.29,0,.51-.06.63-.19s.19-.33.19-.62v-.27c0-.29-.06-.5-.18-.62-.12-.12-.34-.19-.64-.19h-1.82v1.89Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M81.24,31.82c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33s.33.11.33.33v4.32h2.17c.22,0,.33.11.33.33s-.11.33-.33.33h-2.5Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M84.9,31.78c-.21-.08-.27-.22-.19-.43l1.86-4.59c.08-.17.2-.26.37-.26h.02c.17,0,.29.09.34.26l1.9,4.59c.08.21.02.35-.18.43-.21.08-.35.02-.43-.18l-.42-1.03h-2.44l-.4,1.03c-.08.2-.22.26-.42.18ZM85.99,29.92h1.91l-.98-2.37-.94,2.37Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M90.7,31.82c-.09,0-.16-.03-.23-.1-.07-.07-.1-.14-.1-.23v-4.65c0-.09.03-.16.1-.23s.14-.1.23-.1.16.03.23.1c.07.07.1.14.1.23v1.97h3.2v-1.97c0-.09.03-.16.1-.23.07-.07.14-.1.23-.1s.16.03.23.1c.07.07.1.14.1.23v4.65c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1s-.17-.03-.23-.1c-.07-.07-.1-.14-.1-.23v-2.03h-3.2v2.03c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          {/* Text paths - third row */}
          <path d="M29.32,41.27c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33h2.04c.42,0,.73.11.96.33.22.22.33.53.33.94v.21c0,.35-.11.63-.33.82.42.23.62.66.62,1.27v.27c0,.48-.13.85-.38,1.1-.25.25-.62.38-1.1.38h-2.15ZM29.65,38.06h1.86c.19,0,.32-.06.39-.18.07-.12.1-.27.1-.45v-.21c0-.23-.05-.39-.14-.48-.09-.09-.26-.13-.49-.13h-1.72v1.45ZM29.65,40.61h1.82c.29,0,.51-.06.63-.19s.19-.33.19-.62v-.27c0-.29-.06-.5-.18-.62-.12-.12-.34-.19-.64-.19h-1.82v1.89Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M34.59,41.27c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33s.33.11.33.33v4.32h2.17c.22,0,.33.11.33.33s-.11.33-.33.33h-2.5Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M38.25,41.24c-.21-.08-.27-.22-.19-.43l1.86-4.59c.08-.17.2-.26.37-.26h.02c.17,0,.29.09.34.26l1.9,4.59c.08.21.02.35-.18.43-.21.08-.35.02-.43-.18l-.42-1.03h-2.44l-.4,1.03c-.08.2-.22.26-.42.18ZM39.33,39.37h1.91l-.98-2.37-.94,2.37Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M44.04,41.27c-.09,0-.16-.03-.23-.1-.07-.07-.1-.14-.1-.23v-4.65c0-.09.03-.16.1-.23s.14-.1.23-.1.16.03.23.1c.07.07.1.14.1.23v1.97h3.2v-1.97c0-.09.03-.16.1-.23.07-.07.14-.1.23-.1s.16.03.23.1c.07.07.1.14.1.23v4.65c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1s-.17-.03-.23-.1c-.07-.07-.1-.14-.1-.23v-2.03h-3.2v2.03c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M52.64,41.27c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33h2.04c.42,0,.73.11.96.33.22.22.33.53.33.94v.21c0,.35-.11.63-.33.82.42.23.62.66.62,1.27v.27c0,.48-.13.85-.38,1.1-.25.25-.62.38-1.1.38h-2.15ZM52.97,38.06h1.86c.19,0,.32-.06.39-.18.07-.12.1-.27.1-.45v-.21c0-.23-.05-.39-.14-.48-.09-.09-.26-.13-.49-.13h-1.72v1.45ZM52.97,40.61h1.82c.29,0,.51-.06.63-.19s.19-.33.19-.62v-.27c0-.29-.06-.5-.18-.62-.12-.12-.34-.19-.64-.19h-1.82v1.89Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M57.92,41.27c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33s.33.11.33.33v4.32h2.17c.22,0,.33.11.33.33s-.11.33-.33.33h-2.5Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M61.57,41.24c-.21-.08-.27-.22-.19-.43l1.86-4.59c.08-.17.2-.26.37-.26h.02c.17,0,.29.09.34.26l1.9,4.59c.08.21.02.35-.18.43-.21.08-.35.02-.43-.18l-.42-1.03h-2.44l-.4,1.03c-.08.2-.22.26-.42.18ZM62.66,39.37h1.91l-.98-2.37-.94,2.37Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M67.37,41.27c-.09,0-.16-.03-.23-.1-.07-.07-.1-.14-.1-.23v-4.65c0-.09.03-.16.1-.23s.14-.1.23-.1.16.03.23.1c.07.07.1.14.1.23v1.97h3.2v-1.97c0-.09.03-.16.1-.23.07-.07.14-.1.23-.1s.16.03.23.1c.07.07.1.14.1.23v4.65c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1s-.17-.03-.23-.1c-.07-.07-.1-.14-.1-.23v-2.03h-3.2v2.03c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M75.97,41.27c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33h2.04c.42,0,.73.11.96.33.22.22.33.53.33.94v.21c0,.35-.11.63-.33.82.42.23.62.66.62,1.27v.27c0,.48-.13.85-.38,1.1-.25.25-.62.38-1.1.38h-2.15ZM76.3,38.06h1.86c.19,0,.32-.06.39-.18.07-.12.1-.27.1-.45v-.21c0-.23-.05-.39-.14-.48-.09-.09-.26-.13-.49-.13h-1.72v1.45ZM76.3,40.61h1.82c.29,0,.51-.06.63-.19s.19-.33.19-.62v-.27c0-.29-.06-.5-.18-.62-.12-.12-.34-.19-.64-.19h-1.82v1.89Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M81.24,41.27c-.22,0-.33-.11-.33-.33v-4.65c0-.22.11-.33.33-.33s.33.11.33.33v4.32h2.17c.22,0,.33.11.33.33s-.11.33-.33.33h-2.5Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M84.9,41.24c-.21-.08-.27-.22-.19-.43l1.86-4.59c.08-.17.2-.26.37-.26h.02c.17,0,.29.09.34.26l1.9,4.59c.08.21.02.35-.18.43-.21.08-.35.02-.43-.18l-.42-1.03h-2.44l-.4,1.03c-.08.2-.22.26-.42.18ZM85.99,39.37h1.91l-.98-2.37-.94,2.37Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
          <path d="M90.7,41.27c-.09,0-.16-.03-.23-.1-.07-.07-.1-.14-.1-.23v-4.65c0-.09.03-.16.1-.23s.14-.1.23-.1.16.03.23.1c.07.07.1.14.1.23v1.97h3.2v-1.97c0-.09.03-.16.1-.23.07-.07.14-.1.23-.1s.16.03.23.1c.07.07.1.14.1.23v4.65c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1s-.17-.03-.23-.1c-.07-.07-.1-.14-.1-.23v-2.03h-3.2v2.03c0,.09-.03.16-.1.23-.07.07-.14.1-.23.1Z" fill="#ccff00" stroke="currentColor" strokeMiterlimit="10" strokeWidth=".25"></path>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}

export function SkillsIcon() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '60px',
        position: 'relative',
        transform: 'translateY(-8px)'
      }}
    >
      {/* Custom SVG icon that pops out and becomes bigger */}
      <motion.div
        className="skeletonImg"
        style={{
          transition: 'transform 0.4s ease',
          filter: isHovered ? 'drop-shadow(0 0 15px currentColor) drop-shadow(0 0 25px currentColor)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: isHovered ? 10 : 1
        }}
        animate={isHovered ? {
          x: [0, -15, 15, -15, 0],
          y: [0, -25, -20, -25, 0],
          rotate: [0, -15, 15, -15, 0],
          scale: [1, 1.8, 1.7, 1.8, 1]
        } : {
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
      >
          <motion.svg
            id="uuid-e9de6485-c7ce-41ab-8eda-28943fc66203"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122 90"
            width="55"
            height="55"
            style={{
              color: 'currentColor',
              transform: isHovered ? 'scale(1.5)' : 'scale(1)',
              transition: 'transform 0.4s ease'
            }}
          >
            <path d="M120.05,25.49c0-.42-.33-.66-.75-.76s-7.26-1.58-7.26-1.58c0,0,0,0,0,0-1.26-.36-2.87-.67-4.63-.94.03-.04.07-.07.11-.11,1.82-2.11,3.02-4.76,3.38-7.49.2-1.52.17-3.67-1-4.85-.76-.76-1.92-.85-2.88-.44-.31.13-.59.32-.85.52-.17-.32-.32-.66-.48-.94-.48-.85-1.75-1.24-2.53-.49l-.65.62c-.18-.47-.35-.95-.53-1.43-.42-1.13-2.22-1.13-2.81-.19-.05.08-.11.16-.17.24-.72-.79-1.12-.99-.93-.25.07.28.21.64.38,1.03-.15.21-.29.44-.45.65-.05-.19-.1-.38-.15-.57-.4-1.56-3.13-1.79-3.75-.34-.14.32-.9.48-1.23.49-.66.01-.48-.31-1.1-.62-.9-.45-1.76-1.85-2.78-1.73-.47.06-1.11,1.39-1.58,1.7-.11-.24-.23-.48-.34-.72-.49-1.02-1.24-2-2.56-1.75-.97.19-1.63,1.05-2.25,1.73-.23.26-.47.51-.72.75-.01.01-.03.02-.04.04-.01-.02-.02-.04-.04-.06l-.7-1.22c-.52-.9-1.22-1.88-2.46-1.64-1.04.2-1.53,1.12-2.08,1.9l-.08.11c-.37-.64-.73-1.28-1.1-1.93-.62-1.09-2.04-1.14-2.81-.19-.53.66-1.01,1.35-1.43,2.08-.59-.77-1.15-1.56-1.67-2.37-.58-.89-2.19-1.35-2.81-.19-1.22,2.28-1.57,4.93-1.56,7.49,0,2.41.42,4.87,1.65,7.01,1.02,1.77,2.3,3.79,4.63,5.46-.01.01-.03.02-.05.03-.93.62-4.2,2.55-8.75,2.6-3.92.04-7.65-1.98-9.05-2.84-.18-.12-.37-.25-.57-.37,0,0-.01,0-.01,0h0s-.01,0-.02,0c1.89-1.55,3.02-3.31,3.94-4.89,1.24-2.13,1.66-4.59,1.68-7,.02-2.56-.31-5.21-1.53-7.5-.62-1.17-2.23-.71-2.81.18-.53.81-1.09,1.6-1.68,2.36-.42-.72-.89-1.42-1.42-2.08-.76-.96-2.18-.91-2.81.18-.37.64-.74,1.28-1.11,1.92l-.08-.11c-.55-.78-1.04-1.7-2.07-1.91-1.23-.24-1.94.73-2.46,1.63l-.71,1.22s-.02.04-.04.06c-.01-.01-.03-.02-.04-.04-.25-.24-.49-.5-.72-.75-.62-.68-1.27-1.55-2.24-1.74-1.32-.26-2.08.72-2.57,1.74-.11.24-.23.48-.34.72-.47-.31-1.1-1.65-1.57-1.7-1.01-.13-1.89,1.27-2.79,1.72-.62.31-.43.63-1.1.62-.33,0-1.09-.17-1.23-.49-.61-1.45-3.35-1.23-3.75.33-.05.19-.1.38-.15.57-.41-.54-.8-1.1-1.16-1.68-.59-.95-2.39-.95-2.81.18-.18.47-.35.95-.53,1.42l-.64-.62c-.78-.75-2.05-.37-2.54.48-.16.28-.31.61-.48.94-.26-.2-.54-.39-.85-.53-.96-.41-2.12-.32-2.88.43-1.18,1.17-1.21,3.32-1.02,4.84.35,2.74,1.54,5.39,3.35,7.51.1.11.2.22.3.33-1.22.21-2.34.44-3.27.7,0,0,0,0,0,0,0,0-6.84,1.45-7.27,1.55s-.76.34-.76.75v3.24c0,.42.33.76.75.76,0,0,2.17-.12,2.16,4.09,0,.18,0,.33.03.47.31,8.54,3.72,20.29,7.33,23.91,2.68,2.69,9.69,4.01,16.65,4.02,4.47,0,8.92-.52,12.19-1.58,1.59-.51,3.09-1.41,4.5-2.65-1.03,2.81-1.53,6.08-1.48,7.65-6.21,1.51-12.3,3.4-16.07,6.96-2.16,2.04-3.07,4.47-3.34,6.87-.29,2.55-.04,5.22,1.64,7.58.86,1.21,3.44.86,4.44,0,.91-.77,1.88-1.52,2.88-2.25.59.75,1.26,1.48,2.03,2.17,1.1,1,3.34,1.05,4.44,0,.65-.61,1.29-1.23,1.94-1.84l.11.11c.78.81,1.46,1.77,3.07,2.04,1.91.33,3.12-.6,4.04-1.46l1.23-1.17s.04-.04.06-.06c.02.01.04.03.06.04.38.25.71.53,1.05.8.9.72,1.84,1.63,3.35,1.89,2.05.35,3.34-.58,4.22-1.57.2-.23.41-.46.61-.69.7.34,1.56.57,2.29.66,1.58.19,3.1,0,4.56-.39,1-.27,2.23-.81,3.28-.75.51.03,1.19.36,1.37.69.81,1.49,4.16,1.54,4.96,0,.1-.19.19-.37.29-.56.6.56,1.15,1.15,1.66,1.75.83.98,3.67,1.1,4.44,0,.33-.46.65-.92.98-1.39l.95.66c1.15.8,3.19.5,4.04-.31.28-.27.56-.59.85-.9.39.22.82.43,1.28.58,1.47.47,3.31.46,4.58-.24,1.97-1.09,2.24-3.23,2.09-4.76-.27-2.76-1.88-5.48-4.52-7.71-2.77-2.34-6.37-4.15-10.71-5.26-2.26-.58-4.63-.93-7.03-1.16.1-.45.15-.94.15-1.45.17-1.96-.27-4.24-1.05-6.14,1.27,1.05,2.62,1.82,4.04,2.29,3.26,1.07,7.71,1.62,12.18,1.62,6.96.01,13.98-1.28,16.66-3.96,3.62-3.6,7.08-15.33,7.42-23.88.02-.13.03-.29.03-.47,0-.32.02-.61.04-.88,0-.02.02-.03.02-.06.23-2.38,2.7-1.19,2.83-2.01.05-.34.04-.99.01-1.76,0-.04.03-.08.03-.13v-3.24Z" fill="var(--text-color)" stroke="var(--text-color)" strokeLinejoin="round" strokeWidth="2"></path>
            <rect x="71.38" y="38.58" width="42.63" height="2" transform="translate(5.72 90.52) rotate(-53.48)" fill="#cef565"></rect>
            <rect x="77.53" y="39.51" width="40.45" height="4" transform="translate(6.22 95.36) rotate(-53.48)" fill="#cef565"></rect>
            <rect x="9.5" y="39.5" width="42.63" height="2" transform="translate(-20.07 41.16) rotate(-53.48)" fill="#cef565"></rect>
            <rect x="16.59" y="39.96" width="39.27" height="4" transform="translate(-19.05 46.1) rotate(-53.48)" fill="#cef565"></rect>
            <path d="M95.58,5.82c.72,2.84,7.59,12.74,6.5,15.54-1.09,2.79,4.08,3.51,2.38-1.96-1.7-5.47-9.59-16.42-8.87-13.58Z" fill="#cef565" opacity=".5" ></path>
            <path d="M97.45,78.09c-.27-2.76-1.88-5.48-4.51-7.71-2.77-2.34-6.37-4.15-10.71-5.26-4.83-1.23-10.17-1.46-15.33-1.65-5.7-.21-11.41-.28-17.12-.21-.65-.41-1.62-.63-2.5-.43-7.25,1.67-14.87,3.54-19.28,7.72-2.16,2.04-3.07,4.47-3.34,6.87-.29,2.55-.04,5.22,1.64,7.58.86,1.21,3.44.86,4.44,0,.91-.77,1.88-1.52,2.88-2.25.59.75,1.26,1.48,2.03,2.17,1.11,1,3.34,1.05,4.44,0,.65-.61,1.29-1.23,1.94-1.84.04.04.07.08.11.11.78.81,1.46,1.77,3.07,2.04,1.91.33,3.12-.6,4.04-1.46l1.23-1.17s.04-.04.06-.06c.02.01.04.03.06.04.38.25.71.53,1.05.8.9.72,1.84,1.63,3.35,1.89,2.05.35,3.34-.58,4.22-1.57.2-.23.41-.46.61-.69.7.34,1.56.57,2.29.66,1.58.19,3.1,0,4.56-.39,1-.27,2.23-.81,3.28-.75.51.03,1.19.36,1.37.69.81,1.49,4.16,1.54,4.96,0,.1-.19.19-.37.29-.56.6.56,1.15,1.15,1.66,1.75.83.98,3.67,1.1,4.44,0,.33-.46.65-.92.98-1.39.32.22.63.44.95.66,1.15.8,3.19.5,4.04-.31.28-.27.56-.59.85-.9.39.22.82.43,1.28.58,1.47.47,3.31.46,4.58-.24,1.97-1.09,2.24-3.23,2.09-4.76Z" fill="#cef565" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
         
            <path d="M72,52.95c-1.34-1.04-6.67-7.75-4.53-23.79.54-4.06-15.34-1.25-14.97-.03,2.06,6.74-2.41,21.45-3.83,22.2-3.5,1.83-5.05,11.6-4.5,13.01.83,2.11,5.63,3.05,7.73,1.71,1.29,1.18,2,4.07,7.28,4.37s9.18-3.58,10.04-4.38c0,0,0,0,.01,0,1.41.58,3.16,1.17,4.49.1,3.24-2.61,1.21-10.95-1.72-13.22Z" fill="#cef565" strokeWidth="2"></path>
            <path d="M46.78,55.45c-2.55,2.25-5.67,13.67,3.79,10.59" fill="#cef565" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M68.92,66.07c9.45,3.12,6.37-8.31,3.83-10.57" fill="#cef565" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M49.13,63.28c1.29,1.3,6.76,7.46,10.88,7.25,3.94.21,9.2-5.4,10.59-6.74" fill="#cef565" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"strokeWidth="2"></path>
            <path d="M116.81,23.14c-.43-.09-7.26-1.58-7.26-1.58,0,0,0,0,0,0-3.85-1.1-11.05-1.76-15.35-2-4.48-.25-15.57-.62-21.6,1.38-1.52.5-2.77,1.13-3.81,1.83h0s-.01,0-.03.02c-.08.06-.16.11-.24.17-.93.62-4.2,2.55-8.75,2.6-3.92.04-7.65-1.98-9.05-2.84-.18-.12-.37-.25-.57-.37,0,0-.01,0-.01,0h0c-.91-.55-1.97-1.04-3.2-1.46-6.03-2.02-17.11-1.7-21.6-1.46-4.3.22-11.5.86-15.36,1.94,0,0,0,0,0,0,0,0-6.84,1.45-7.27,1.55-.43.09-.76.34-.76.75v3.24c0,.42.33.76.75.76,0,0,2.17-.12,2.16,4.09,0,.18,0,.33.03.47.31,8.54,3.72,20.29,7.33,23.91,2.68,2.69,9.69,4.01,16.65,4.02,4.47,0,8.92-.52,12.19-1.58,4.04-1.3,7.49-4.95,10.25-10.85.99-2.11,2.4-5.63,3.54-10.45l.03-.12c.14-.6.33-1.39.47-2.3h0s1-3.95,4.42-3.95,4.45,4.34,4.45,4.34h0c.13.75.28,1.41.4,1.92l.03.12c1.12,4.82,2.52,8.35,3.49,10.46,2.74,5.91,6.17,9.57,10.2,10.89,3.26,1.07,7.71,1.62,12.18,1.62,6.96.01,13.98-1.28,16.66-3.96,3.62-3.6,7.08-15.33,7.42-23.88.02-.13.03-.29.03-.47,0-4.21,2.18-4.08,2.18-4.08.42,0,.76-.34.76-.75v-3.24c0-.42-.32-.66-.75-.76ZM50.66,36.17l-.03.12c-2.34,9.93-6.42,16.73-10.91,18.18-3.53,1.14-8.99,1.62-14.24,1.25-5.63-.4-9.18-1.61-10.2-2.63-3.07-3.08-6.74-16.89-5.21-24.26.88-4.26,7.28-4.66,15.61-5.08,8.78-.45,16.22.02,19.9,1.25,6.61,2.22,6.1,6.94,5.09,11.19ZM104.13,53.26c-1.02,1.02-4.58,2.22-10.21,2.59-5.25.35-10.71-.15-14.24-1.31-4.49-1.47-8.54-8.28-10.83-18.22l-.03-.12c-.99-4.25-1.48-8.97,5.14-11.16,3.68-1.22,11.12-1.66,19.9-1.17,8.32.46,14.72.88,15.58,5.15,1.49,7.38-2.23,21.17-5.31,24.24Z" fill="#cef565" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M9.59,12.82c.35,2.74,1.54,5.39,3.35,7.51,1.9,2.22,4.3,3.88,7.12,4.8,3.14,1.03,6.55.73,9.81,1,17.52,1.49,21.65-4.34,24.18-8.69,1.24-2.13,1.66-4.59,1.68-7,.02-2.56-.31-5.21-1.53-7.5-.62-1.17-2.23-.71-2.81.18-.53.81-1.09,1.6-1.68,2.36-.42-.72-.89-1.42-1.42-2.08-.76-.96-2.18-.91-2.81.18-.37.64-.74,1.28-1.11,1.92-.03-.04-.05-.07-.08-.11-.55-.78-1.04-1.7-2.07-1.91-1.23-.24-1.94.73-2.46,1.63l-.71,1.22s-.02.04-.04.06c-.01-.01-.03-.02-.04-.04-.25-.24-.49-.5-.72-.75-.62-.68-1.27-1.55-2.24-1.74-1.32-.26-2.08.72-2.57,1.74-.11.24-.23.48-.34.72-.47-.31-1.1-1.65-1.57-1.7-1.01-.13-1.89,1.27-2.79,1.72-.62.31-.43.63-1.1.62-.33,0-1.09-.17-1.23-.49-.61-1.45-3.35-1.23-3.75.33-.05.19-.1.38-.15.57-.41-.54-.8-1.1-1.16-1.68-.59-.95-2.39-.95-2.81.18-.18.47-.35.95-.53,1.42-.21-.21-.43-.41-.64-.62-.78-.75-2.05-.37-2.54.48-.16.28-.31.61-.48.94-.26-.2-.54-.39-.85-.53-.96-.41-2.12-.32-2.88.43-1.18,1.17-1.21,3.32-1.02,4.84Z" fill="#cef565" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M107.41,8.17c-.76-.76-1.92-.85-2.88-.44-.31.13-.59.32-.85.52-.17-.32-.32-.66-.48-.94-.48-.85-1.75-1.24-2.53-.49-.22.21-.43.41-.65.62-.17-.48-.35-.95-.52-1.43-.42-1.13-2.22-1.13-2.81-.19-.36.58-.75,1.14-1.17,1.67-.05-.19-.1-.38-.15-.57-.4-1.56-3.13-1.79-3.75-.34-.14.32-.9.48-1.23.49-.66.01-.48-.31-1.1-.62-.9-.45-1.76-1.85-2.78-1.73-.47.06-1.11,1.39-1.58,1.7-.11-.24-.23-.48-.34-.72-.49-1.02-1.24-2-2.56-1.75-.97.19-1.63,1.05-2.25,1.73-.23.26-.47.51-.72.75-.01.01-.03.02-.04.04-.01-.02-.02-.04-.04-.06l-.7-1.22c-.52-.9-1.22-1.88-2.46-1.64-1.04.2-1.53,1.12-2.08,1.9-.03.04-.05.07-.08.11-.37-.64-.73-1.28-1.1-1.93-.62-1.09-2.04-1.14-2.81-.19-.53.66-1,1.35-1.43,2.08-.59-.77-1.15-1.56-1.67-2.37-.58-.89-2.19-1.35-2.81-.19-1.22,2.28-1.57,4.93-1.56,7.49,0,2.41.42,4.87,1.65,7.01,2.51,4.36,6.61,10.21,24.14,8.79,3.27-.26,6.68.05,9.82-.97,2.82-.91,5.23-2.56,7.14-4.78,1.82-2.11,3.02-4.76,3.38-7.49.2-1.52.17-3.67-1-4.85Z" fill="#cef565" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
          </motion.svg>
        </motion.div>
    </motion.div>
  );
}



