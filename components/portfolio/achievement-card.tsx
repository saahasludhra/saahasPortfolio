import { Braces, Database, Layers3, Sparkles, TerminalSquare, Waves } from "lucide-react"
import type { achievements } from "@/lib/portfolio-data"

type Achievement = (typeof achievements)[number]
const icons = { code: Braces, wave: Waves, database: Database, layers: Layers3, spark: Sparkles, terminal: TerminalSquare }

export function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const Icon = icons[achievement.icon]
  return <article className="achievement-card"><div className="badge-mark"><Icon aria-hidden="true"/><span>{String(index + 1).padStart(2,"0")}</span></div><div><p className="eyebrow">Project milestone</p><h3>{achievement.title}</h3><p>{achievement.description}</p></div><footer>Recorded <span>•</span> {achievement.earned}</footer></article>
}
