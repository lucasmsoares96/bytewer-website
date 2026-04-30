import {
  Activity,
  BarChart,
  BellRing,
  Bot,
  CalendarCheck,
  CalendarX2,
  CheckCircle2,
  Clock,
  Code,
  Cpu,
  Database,
  GitBranch,
  Lightbulb,
  Mail,
  type LucideIcon,
  type LucideProps,
  MessageSquare,
  PhoneCall,
  Repeat,
  Rocket,
  Server,
  Settings,
  ShieldCheck,
  Smartphone,
  Target,
  Terminal,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react'
import React from 'react'

export const ICON_NAMES = [
  'Activity',
  'BarChart',
  'BellRing',
  'Bot',
  'CalendarCheck',
  'CalendarX2',
  'CheckCircle2',
  'Clock',
  'Code',
  'Cpu',
  'Database',
  'GitBranch',
  'Lightbulb',
  'Mail',
  'MessageSquare',
  'PhoneCall',
  'Repeat',
  'Rocket',
  'Server',
  'Settings',
  'ShieldCheck',
  'Smartphone',
  'Target',
  'Terminal',
  'TrendingUp',
  'UserCheck',
  'Users',
  'Zap',
] as const

export type IconName = (typeof ICON_NAMES)[number]

const ICON_MAP: Record<IconName, LucideIcon> = {
  Activity,
  BarChart,
  BellRing,
  Bot,
  CalendarCheck,
  CalendarX2,
  CheckCircle2,
  Clock,
  Code,
  Cpu,
  Database,
  GitBranch,
  Lightbulb,
  Mail,
  MessageSquare,
  PhoneCall,
  Repeat,
  Rocket,
  Server,
  Settings,
  ShieldCheck,
  Smartphone,
  Target,
  Terminal,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
}

export type IconProps = LucideProps & {
  name: IconName | string | null | undefined
  fallback?: IconName
}

export const Icon: React.FC<IconProps> = ({ name, fallback = 'Zap', ...rest }) => {
  const resolved = (name && (ICON_MAP[name as IconName] ?? ICON_MAP[fallback])) || ICON_MAP[fallback]
  const Component = resolved
  return <Component {...rest} />
}

export const iconSelectOptions = ICON_NAMES.map((name) => ({ label: name, value: name }))
