'use client'

import { motion } from 'framer-motion'
import {
  Activity,
  CheckCircle2,
  Cpu,
  GitBranch,
  Server,
  ShieldCheck,
  Terminal,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'

const glassCardStyle =
  'w-full h-full bg-gradient-to-br from-[#13132B] via-[#0A0A15] to-[#050505] border border-brand/40 rounded-2xl p-5 flex flex-col shadow-[0_0_40px_rgba(91,78,255,0.15)] ring-1 ring-white/5 relative overflow-hidden'

const CodeCard = () => (
  <div className={glassCardStyle}>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/10 blur-[50px] rounded-full pointer-events-none" />
    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3 relative z-10">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
      <div className="text-[10px] font-mono text-blue-300 flex items-center gap-1">
        <Terminal size={10} />
        <span>ai_processor.py</span>
      </div>
    </div>
    <div className="flex-1 font-mono text-[10px] sm:text-xs text-blue-100 space-y-1.5 overflow-hidden relative z-10">
      <div>
        <span className="text-purple-400 mr-2">def</span>
        <span className="text-yellow-200">optimize_workflow</span>(data):
      </div>
      <div className="pl-4 text-gray-500"># AI Analysis Layer</div>
      <div className="pl-4">
        <span className="text-blue-400">await</span> model.predict({'{'}
      </div>
      <div className="pl-8">
        <span className="text-blue-200">context:</span>{' '}
        <span className="text-green-400">&quot;enterprise&quot;</span>,
      </div>
      <div className="pl-8">
        <span className="text-blue-200">efficiency:</span>{' '}
        <span className="text-orange-400">0.99</span>
      </div>
      <div className="pl-4">{'}'})</div>
      <div className="pl-4 flex items-center text-green-400/90">
        <CheckCircle2 size={10} className="mr-1" /> Optimization Complete
      </div>
    </div>
  </div>
)

const MetricsCard = () => (
  <div className={glassCardStyle}>
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-[60px] rounded-full" />
    <div className="flex items-center gap-3 mb-6 relative z-10">
      <div className="p-2 bg-brand/20 rounded-lg text-brand border border-brand/20 shadow-[0_0_15px_rgba(91,78,255,0.2)]">
        <Activity size={18} />
      </div>
      <div>
        <div className="text-xs text-blue-200/70 font-medium">Performance</div>
        <div className="text-sm font-bold text-white tracking-wide">+128% Efficiency</div>
      </div>
    </div>
    <div className="flex-1 relative z-10 flex items-end gap-2 px-1">
      {[40, 65, 45, 80, 55, 95, 85].map((h, i) => (
        <div
          key={i}
          className="flex-1 bg-gradient-to-t from-blue-600/10 to-blue-400/20 border-t border-x border-blue-400/30 rounded-t-sm"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  </div>
)

const InfraCard = () => (
  <div className={glassCardStyle}>
    <div className="flex items-center justify-between mb-4 relative z-10">
      <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
        <Server size={14} className="text-blue-400" />
        Infrastructure
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
        <span className="text-[10px] text-green-400 font-medium">Operational</span>
      </div>
    </div>
    <div className="space-y-3 relative z-10">
      <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu size={14} className="text-blue-300" />
          <span className="text-xs text-gray-300">Cluster A</span>
        </div>
        <span className="text-xs text-brand font-mono font-bold">12 Nodes</span>
      </div>
      <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GitBranch size={14} className="text-blue-300" />
          <span className="text-xs text-gray-300">Deploy</span>
        </div>
        <span className="text-xs text-blue-400 font-mono">v2.4.0</span>
      </div>
      <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-blue-300" />
          <span className="text-xs text-gray-300">Security</span>
        </div>
        <span className="text-[10px] text-green-400 border border-green-500/30 bg-green-500/10 px-2 py-0.5 rounded-full">
          Audited
        </span>
      </div>
    </div>
  </div>
)

const cards = [<CodeCard key="code" />, <MetricsCard key="metrics" />, <InfraCard key="infra" />]

export const HeroCardStack: React.FC = () => {
  const [head, setHead] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setHead((h) => (h + 1) % cards.length), 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-[350px] h-[350px] md:max-w-[450px] md:h-[450px] flex items-center justify-center perspective-[1000px] mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="relative w-full h-full">
        {cards.map((card, i) => {
          const pos = (i - head + cards.length) % cards.length
          const isFront = pos === 0
          const isMiddle = pos === 1
          return (
            <motion.div
              key={i}
              animate={{
                opacity: isFront ? 1 : isMiddle ? 0.8 : 0.5,
                scale: isFront ? 1 : isMiddle ? 0.95 : 0.9,
                x: isFront ? 0 : isMiddle ? 35 : 70,
                y: isFront ? 0 : isMiddle ? -35 : -70,
                zIndex: 3 - pos,
                filter: isFront
                  ? 'brightness(1) blur(0px)'
                  : `brightness(${0.8 - pos * 0.1}) blur(${pos}px)`,
                rotateZ: isFront ? 0 : isMiddle ? 3 : 6,
                rotateX: 5,
                rotateY: -5,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 18 }}
              className="absolute w-full h-[260px] md:h-[300px] origin-center left-1/2 top-1/2"
              style={{
                marginTop: -130,
                marginLeft: isFront ? -175 : isMiddle ? -140 : -105,
              }}
            >
              {card}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
