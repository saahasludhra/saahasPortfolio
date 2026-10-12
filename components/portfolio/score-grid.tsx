import { academicScores } from "@/lib/portfolio-data"

export function ScoreGrid({ compact = false }: { compact?: boolean }) {
  return <div className={`score-grid ${compact ? "is-compact" : ""}`}>{academicScores.map((score, index) => <article key={score.label}><span>{String(index + 1).padStart(2,"0")}</span><strong>{score.value}</strong><p>{score.label}</p></article>)}</div>
}
