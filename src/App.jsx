import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const surpriseImages = [
  '/src/images/Screenshot 2026-05-09 232549.png',
  '/src/images/Screenshot 2026-05-09 232600 - Copy.png',
  '/src/images/Screenshot 2026-05-09 232609.png',
  '/src/images/Screenshot 2026-05-09 232615 - Copy - Copy.png',
  '/src/images/Screenshot 2026-05-09 232628 - Copy - Copy.png',
  '/src/images/Screenshot 2026-05-09 232636 - Copy.png',
];

const SurpriseModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-rose-900/40 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white/90 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 max-w-5xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-white/50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-rose-600 italic">✨ Surprise Gallery ✨</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-rose-100 rounded-full transition-colors text-rose-500 text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surpriseImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white"
              >
                <img 
                  src={src} 
                  alt={`Surprise ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700 italic">"Every moment captured is a memory cherished forever. ❤️"</p>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const FloatingHeart = ({ delay, duration, left, size }) => (
  <motion.div
    initial={{ y: '110vh', opacity: 0, scale: 0 }}
    animate={{ 
      y: '-10vh', 
      opacity: [0, 0.7, 0.7, 0],
      scale: [0, size, size, 0],
      x: Math.sin(delay) * 50
    }}
    transition={{ 
      duration: duration, 
      delay: delay, 
      repeat: Infinity, 
      ease: "linear" 
    }}
    className="absolute text-rose-300 pointer-events-none z-0"
    style={{ left: `${left}%` }}
  >
    ❤️
  </motion.div>
);

const Card = ({ emoji, title, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ 
      y: -10, 
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(244, 63, 94, 0.15)"
    }}
    className="bg-white/60 backdrop-blur-xl border border-rose-100/50 rounded-[2.5rem] p-8 shadow-sm transition-all duration-300 group"
  >
    <motion.div 
      initial={{ scale: 0.8 }}
      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
      className="text-5xl mb-6 flex justify-center md:justify-start"
    >
      {emoji}
    </motion.div>
    <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-rose-500 transition-colors">
      {title}
    </h2>
    <p className="text-gray-600 leading-relaxed">
      {text}
    </p>
  </motion.div>
);

export default function CuteBoyfriendWebsite() {
  const [hearts, setHearts] = useState([]);
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 10,
      size: 0.5 + Math.random() * 1.5
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="min-h-screen bg-[#fff5f6] text-gray-800 overflow-x-hidden selection:bg-rose-200 selection:text-rose-900">
      <SurpriseModal isOpen={isSurpriseOpen} onClose={() => setIsSurpriseOpen(false)} />

      {/* Background Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {hearts.map(heart => (
          <FloatingHeart key={heart.id} {...heart} />
        ))}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-rose-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-pink-100/40 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-rose-200 blur-3xl rounded-full"
            />
            <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-600 to-rose-400 drop-shadow-sm leading-tight">
              For My Favorite <br className="hidden md:block" /> Person 💕
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 max-w-2xl text-lg md:text-2xl text-gray-600 leading-relaxed font-light px-4"
          >
            Every day feels softer, happier, and more special because of you.
            Thank you for loving me, making me laugh, and staying by my side.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white text-xl font-semibold shadow-[0_10px_30px_rgba(244,63,94,0.3)] hover:shadow-[0_15px_40px_rgba(244,63,94,0.4)] transition-all duration-300 flex items-center gap-3"
            >
              I Love You More Everyday <span>💌</span>
            </motion.button>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-20 text-rose-300 text-3xl"
          >
            ↓
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <Card 
              emoji="🌙"
              title="Late Night Talks"
              text="My favorite part of the day is hearing your voice and talking about literally everything and nothing. Time just disappears when I'm with you."
              delay={0.2}
            />
            <Card 
              emoji="🫶"
              title="Your Love"
              text="You make me feel safe, cared for, understood, and loved in the sweetest ways possible. I'm so lucky to have you."
              delay={0.4}
            />
            <Card 
              emoji="✨"
              title="Future Together"
              text="One day the distance will disappear and all our little dreams will finally become real. I can't wait to build a life with you."
              delay={0.6}
            />
          </div>
        </section>

        {/* Love Letter Section */}
        <section className="py-32 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-200 to-pink-200 rounded-[3rem] blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-white/70 backdrop-blur-2xl rounded-[3rem] p-12 md:p-20 shadow-xl border border-white/50 text-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-6xl mb-8"
              >
                💝
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-8 italic">
                A Tiny Love Letter
              </h2>

              <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light italic">
                "No matter how chaotic life gets, you are my comfort person. 
                Thank you for every smile, every reassuring message, every laugh, 
                and every moment you spend with me. I hope this little website 
                reminds you how deeply loved you are."
              </p>

              <div className="mt-12 flex justify-center gap-6 text-4xl">
                <motion.span whileHover={{ scale: 1.4 }} className="cursor-default">💞</motion.span>
                <motion.span whileHover={{ scale: 1.4 }} className="cursor-default">🌸</motion.span>
                <motion.span whileHover={{ scale: 1.4 }} className="cursor-default">✨</motion.span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-16 text-center border-t border-rose-100/50 bg-white/30 backdrop-blur-md mt-20 relative">
          <p className="text-gray-500 font-medium tracking-wide">
            Made with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block text-rose-500">❤️</motion.span> for the cutest boyfriend ever
          </p>
          <div className="mt-4 text-rose-300 text-sm flex flex-col items-center gap-4">
            <span>© {new Date().getFullYear()} • Forever & Always</span>
            
            {/* Easter Egg Button */}
            <motion.button
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setIsSurpriseOpen(true)}
              className="text-rose-200 hover:text-rose-400 transition-colors cursor-pointer text-xl mt-2"
              title="A little secret..."
            >
              ✦
            </motion.button>
          </div>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #fecdd3 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}} />
    </div>
  );
}