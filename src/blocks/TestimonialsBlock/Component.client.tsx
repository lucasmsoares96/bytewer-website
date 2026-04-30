'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import type { TestimonialsBlock as TestimonialsBlockType } from '@/payload-types'

interface TestimonialItem {
    quote?: string | null
    author?: string | null
    role?: string | null
}

const TestimonialCard: React.FC<{
  testimonial: TestimonialItem
  position: 'active' | 'prev' | 'next' | 'hidden'
  onClick: () => void
}> = ({ testimonial, position, onClick }) => {
  const variants = {
    active: {
      x: "-50%",
      y: "-50%",
      scale: 1,
      zIndex: 30,
      opacity: 1,
      rotateY: 0,
      backgroundColor: "rgba(8, 8, 8, 1)",
      borderColor: "rgba(91, 78, 255, 0.5)",
      boxShadow: "0 0 30px rgba(91, 78, 255, 0.25)"
    },
    prev: {
      x: "-105%",
      y: "-50%",
      scale: 0.85,
      zIndex: 20,
      opacity: 0.7,
      rotateY: 25,
      backgroundColor: "rgba(8, 8, 8, 1)",
      borderColor: "rgba(120, 120, 120, 0.3)",
      boxShadow: "0 0 0 rgba(91, 78, 255, 0)"
    },
    next: {
      x: "5%",
      y: "-50%",
      scale: 0.85,
      zIndex: 20,
      opacity: 0.7,
      rotateY: -25,
      backgroundColor: "rgba(8, 8, 8, 1)",
      borderColor: "rgba(120, 120, 120, 0.3)",
      boxShadow: "0 0 0 rgba(91, 78, 255, 0)"
    },
    hidden: {
      x: "-50%",
      y: "-50%",
      scale: 0.5,
      opacity: 0,
      zIndex: 0,
      backgroundColor: "rgba(8, 8, 8, 1)",
      borderColor: "rgba(8, 8, 8, 0)",
      boxShadow: "0 0 0 rgba(91, 78, 255, 0)"
    }
  }

  return (
    <motion.div
      initial={false}
      animate={position}
      variants={variants}
      transition={{
        x: { type: "spring", stiffness: 260, damping: 28 },
        scale: { type: "spring", stiffness: 260, damping: 28 },
        rotateY: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.2 }
      }}
      onClick={onClick}
      className="absolute w-full max-w-[320px] md:max-w-[520px] cursor-pointer perspective-2000 border rounded-[2.5rem] overflow-hidden"
      style={{
        top: '50%',
        left: '50%',
        height: position === 'active' ? '380px' : '300px',
      }}
    >
      <div className={`h-full p-6 md:p-10 flex flex-col select-none transition-shadow duration-500 ${position === 'active' ? 'shadow-[0_0_30px_rgba(91,78,255,0.3)]' : ''}`}>
        <div className="flex justify-between items-start mb-4">
          <Quote className={`${position === 'active' ? 'text-brand/30' : 'text-zinc-900'} transition-colors duration-200`} size={28} />
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className={`w-1 h-1 rounded-full ${position === 'active' ? 'bg-brand/20' : 'bg-zinc-900'}`} />
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 custom-testimonial-scrollbar">
          <p className={`${position === 'active' ? 'text-gray-400' : 'text-zinc-700'} font-medium italic leading-relaxed text-sm md:text-lg transition-colors duration-200`}>
            &quot;{testimonial.quote}&quot;
          </p>
        </div>

        <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/5">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-center justify-center text-zinc-600 font-bold text-lg shrink-0">
            {testimonial.author?.charAt(0)}
          </div>
          <div className="min-w-0 text-left">
            <div className={`font-bold text-sm md:text-base truncate tracking-tight transition-colors ${position === 'active' ? 'text-white/80' : 'text-zinc-700'}`}>{testimonial.author}</div>
            <div className="text-zinc-800 text-[10px] font-bold uppercase tracking-wider truncate">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const TestimonialsBlockClient: React.FC<{ data: TestimonialsBlockType }> = ({ data }) => {
  const testimonials = (data as any).testimonials || []
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  if (testimonials.length === 0) return null

  return (
    <section className="py-24 md:py-32 bg-[#050505] px-6 relative overflow-hidden" id="testimonials">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-[100px] translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-[1400px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-sm font-medium text-brand uppercase tracking-wider">
               {data.heading || 'Depoimentos'}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
             {data.subtitle || 'O que nossos parceiros dizem'}
          </h2>
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] mx-auto">
            {testimonials.map((testimonial: any, index: number) => {
              let position: 'active' | 'prev' | 'next' | 'hidden' = 'hidden'
              if (index === activeIndex) position = 'active'
              else if (index === (activeIndex + 1) % testimonials.length) position = 'next'
              else if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) position = 'prev'

              return (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  position={position}
                  onClick={() => position !== 'active' && setActiveIndex(index)}
                />
              )
            })}
          </div>

          <div className="flex items-center gap-10 mt-8 z-40">
           <button
             onClick={handlePrev}
             className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-zinc-600 hover:text-brand hover:border-brand/30 transition-all bg-white/2 backdrop-blur-sm"
             aria-label="Previous testimonial"
           >
             <ChevronLeft size={20} />
           </button>

           <div className="flex gap-2.5">
             {testimonials.map((_: any, i: number) => (
               <button
                 key={i}
                 onClick={() => setActiveIndex(i)}
                 className={`h-1 transition-all duration-500 rounded-full ${i === activeIndex ? 'w-10 bg-brand/40' : 'w-2 bg-white/5'}`}
                 aria-label={`Go to testimonial ${i + 1}`}
               />
             ))}
           </div>

           <button
             onClick={handleNext}
             className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-zinc-600 hover:text-brand hover:border-brand/30 transition-all bg-white/2 backdrop-blur-sm"
             aria-label="Next testimonial"
           >
             <ChevronRight size={20} />
           </button>
          </div>
        </div>
      </div>
    </section>
  )
}
