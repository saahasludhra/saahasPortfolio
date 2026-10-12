import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { PageHeading } from "@/components/portfolio/page-heading"
import { RecognitionCard } from "@/components/portfolio/recognition-card"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { SiteHeader } from "@/components/portfolio/site-header"
import { recognition } from "@/lib/portfolio-data"

export const metadata: Metadata = { title: "Recognition — Saahas Ludhra", description: "The formal documents connected to Saahas Ludhra's SpeakUp Yuva AI project." }

export default function RecognitionPage() {
  return <main><SiteHeader inner/><PageHeading eyebrow="Recognition details" title="Work seen." italic="Impact noted." intro="These are the formal documents connected to SpeakUp Yuva AI, presented with the context needed to read them accurately."/>
    <section className="recognition-index shell"><div className="recognition-note"><ShieldCheck/><div><p className="eyebrow">A quick note</p><h2>Recognition,<br/><em>with context.</em></h2><p>The India Book of Records entry is a confirmed record. The District Mental Health Programme document is a professional recommendation for an award—not evidence that the award was received.</p></div></div><div className="recognition-stack">{recognition.map(item=><RecognitionCard key={item.slug} item={item}/>)}</div></section>
    <section className="page-cta shell"><p className="eyebrow">Explore the context</p><h2>Meet the project<br/><em>behind the record.</em></h2><Link className="primary-link" href="/projects/speakup-yuva-ai">SpeakUp Yuva AI <ArrowRight/></Link></section><SiteFooter/></main>
}
