'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, Globe2, Zap } from 'lucide-react'

import type { DifferentialsBlock as DifferentialsBlockType } from '@/payload-types'

const CodeMock = () => (
  <div className="w-full md:w-auto md:min-w-[350px] md:max-w-[350px] bg-[#0d0d0d] rounded-xl border border-white/10 p-4 shadow-2xl font-mono text-xs overflow-x-auto">
    <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
      <div className="w-3 h-3 rounded-full bg-red-500/50" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
      <div className="w-3 h-3 rounded-full bg-green-500/50" />
    </div>
    <div className="space-y-1 text-gray-400">
      <div className="whitespace-nowrap"><span className="text-purple-400 mr-2">import</span> <span className="text-white">React</span></div>
      <div className="whitespace-nowrap"><span className="text-purple-400 mr-2">import</span> <span className="text-white">{'{ View, Text }'}</span> <span className="text-purple-400 mx-2">from</span> <span className="text-green-400">&apos;react-native&apos;</span></div>
      <br />
      <div className="text-gray-500 whitespace-nowrap">{/* iOS, Android & Web */}</div>
      <div className="whitespace-nowrap"><span className="text-blue-400 mr-2">const</span> <span className="text-yellow-200">App</span> <span className="text-white">= () =&gt; (</span></div>
      <div className="pl-4 text-white whitespace-nowrap">{"<View>"}</div>
      <div className="pl-6 text-white whitespace-nowrap">{"<Text>Hi</Text>"}</div>
      <div className="pl-4 text-white whitespace-nowrap">{"</View>"}</div>
      <div className="text-white whitespace-nowrap">);</div>
    </div>
  </div>
)

const BarMock = () => (
  <div className="flex items-end gap-2 h-24 mt-auto w-full px-2">
    <div className="w-1/5 bg-white/5 rounded-t-sm h-[30%] animate-pulse" />
    <div className="w-1/5 bg-white/10 rounded-t-sm h-[50%] animate-pulse" />
    <div className="w-1/5 bg-white/20 rounded-t-sm h-[40%] animate-pulse" />
    <div className="w-1/5 bg-brand/40 rounded-t-sm h-[70%] animate-pulse" />
    <div className="w-1/5 bg-brand rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(91,78,255,0.5)]" />
  </div>
)

const CycleMock = () => (
  <div className="mt-8 flex justify-center py-4 w-full text-green-400">
    <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border border-green-500/30 flex items-center justify-center bg-green-500/5 z-10">
          <span className="text-green-400 font-bold text-xs uppercase tracking-tighter">API</span>
        </div>
        <div className="absolute w-24 h-24 border border-dashed border-green-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute w-32 h-32 border border-green-500/10 rounded-full" />
        
        <div className="absolute -top-10 -right-4 w-8 h-8 bg-[#111] rounded-lg flex items-center justify-center text-[10px] text-gray-400 border border-white/10 shadow-lg">AI</div>
        <div className="absolute -bottom-8 -left-4 w-8 h-8 bg-[#111] rounded-lg flex items-center justify-center text-[10px] text-gray-400 border border-white/10 shadow-lg">DB</div>
    </div>
  </div>
)

const TaskMock = () => (
  <div className="w-full md:w-auto md:min-w-[320px] md:max-w-[320px] bg-[#0d0d0d] rounded-xl border border-white/10 p-5 shadow-2xl">
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-2">
        <div className="text-[10px] uppercase text-gray-500 font-bold mb-1 tracking-wider">To Do</div>
        <div className="bg-white/5 p-2 rounded border border-white/5">
          <div className="h-2 w-16 bg-white/20 rounded mb-1.5" />
          <div className="h-1.5 w-10 bg-white/10 rounded" />
        </div>
        <div className="bg-white/5 p-2 rounded border border-white/5">
           <div className="h-2 w-20 bg-white/20 rounded mb-1.5" />
           <div className="h-1.5 w-12 bg-white/10 rounded" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
          <div className="text-[10px] uppercase text-brand font-bold mb-1 tracking-wider">In Progress</div>
          <div className="bg-brand/10 p-2 rounded border border-brand/20">
            <div className="h-2 w-14 bg-brand/40 rounded mb-1.5" />
            <div className="h-1.5 w-8 bg-brand/20 rounded" />
          </div>
          <div className="bg-white/5 p-2 rounded border border-white/5 opacity-50">
             <div className="h-2 w-16 bg-white/20 rounded mb-1.5" />
             <div className="h-1.5 w-10 bg-white/10 rounded" />
          </div>
      </div>
    </div>
  </div>
)

const iconColors = [
    { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', icon: Code2 },
    { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', icon: Server },
    { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400', icon: Globe2 },
    { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', icon: Zap },
]

export const DifferentialsBlockComponent: React.FC<DifferentialsBlockType> = ({
  anchor,
  badge,
  heading,
  headingHighlight,
  subtitle,
  items,
}) => {
  return (
    <section
      id={anchor || 'differentials'}
      className="bg-[#050505] text-white py-24 md:py-32 px-6 relative border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand/20 blur-[120px] rounded-full pointer-events-none opacity-40" />

      <div className="container mx-auto max-w-[1400px]">
        <div className="text-center mb-20">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 text-brand text-sm font-semibold uppercase tracking-wider"
            >
              {badge}
            </motion.div>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            {heading}{' '}
            {headingHighlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-400">
                {headingHighlight}
              </span>
            )}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items?.map((item, i) => {
            const isWide = i === 0 || (items.length === 4 && i === 3)
            const colorIdx = i % iconColors.length
            const colors = iconColors[colorIdx]
            const IconComp = colors.icon
            const Mock = i === 0 ? CodeMock : i === 1 ? BarMock : i === 2 ? CycleMock : TaskMock
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className={`${isWide ? 'lg:col-span-2 p-8 md:p-12' : 'col-span-1 p-8'} bg-black bg-gradient-to-b from-[#111] to-black border border-white/10 rounded-3xl relative overflow-hidden group`}
              >
                <div className={`absolute top-0 ${i === 3 ? 'left-0' : 'right-0'} ${isWide ? 'w-[300px] h-[300px]' : 'w-[200px] h-[200px]'} ${i === 0 ? 'bg-blue-600/10 group-hover:bg-blue-600/20' : colorIdx === 1 ? 'bg-purple-600/10 group-hover:bg-purple-600/20' : colorIdx === 2 ? 'bg-green-600/10 group-hover:bg-green-600/20' : 'bg-orange-600/10 group-hover:bg-orange-600/20'} blur-[80px] rounded-full transition-all duration-500`} />
                
                {isWide ? (
                  <div className={`relative z-10 flex flex-col ${i === 3 ? 'md:flex-row-reverse items-center' : 'md:flex-row items-start md:items-center'} gap-12 h-full`}>
                    <div className="flex-1">
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-6 border ${colors.border}`}>
                        <IconComp className={colors.text} size={24} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="w-full md:w-auto">
                      <Mock />
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-6 border ${colors.border}`}>
                      <IconComp className={colors.text} size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className={`text-gray-400 leading-relaxed ${i === 1 ? 'mb-8' : ''}`}>
                      {item.description}
                    </p>
                    <div className="mt-auto w-full">
                      <Mock />
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DifferentialsBlockComponent
