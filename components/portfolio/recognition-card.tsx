import Link from "next/link"
import { ArrowUpRight, FileImage, FileText } from "lucide-react"
import type { recognition } from "@/lib/portfolio-data"

type Recognition = (typeof recognition)[number]
export function RecognitionCard({ item, compact = false }: { item: Recognition; compact?: boolean }) {
  const Icon = item.slug === "certificate" ? FileText : FileImage
  return <article className={`recognition-card ${compact ? "is-compact" : ""}`}><header><Icon aria-hidden="true"/><span>{item.type}</span></header><p className="eyebrow">{item.organization}</p><h3>{item.title}</h3><div className="recognition-status">{item.status}</div>{!compact && <p className="recognition-description">{item.description}</p>}<footer><div><strong>{item.date}</strong><span>{item.detail}</span></div><Link href={`/recognition/${item.slug}`} aria-label={`View ${item.type}: ${item.title}`}>View document <ArrowUpRight/></Link></footer></article>
}
