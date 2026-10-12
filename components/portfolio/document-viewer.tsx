import Link from "next/link"
import { ArrowLeft, ExternalLink, FileImage, FileText } from "lucide-react"
import { SiteFooter } from "./site-footer"
import { SiteHeader } from "./site-header"

type Props = { kind: "pdf" | "image"; path: string; title: string; organization: string; date: string; available: boolean }
export function DocumentViewer({ kind, path, title, organization, date, available }: Props) {
  const Icon = kind === "pdf" ? FileText : FileImage
  return <main><SiteHeader inner/><article className="document-page shell"><Link className="back-link" href="/recognition"><ArrowLeft/> Back to recognition</Link><header className="document-header"><div><p className="eyebrow">Official document · {kind.toUpperCase()}</p><h1>{title}</h1></div><dl><div><dt>Issued by</dt><dd>{organization}</dd></div><div><dt>Date</dt><dd>{date}</dd></div><div><dt>Status</dt><dd>{available ? "Document available" : "Awaiting local file"}</dd></div></dl></header><div className="document-toolbar"><span><Icon/> {kind === "pdf" ? "PDF document" : "Image document"}</span>{available && <a href={path} target="_blank" rel="noreferrer">Open original <ExternalLink/></a>}</div><div className="document-surface">{available ? kind === "pdf" ? <iframe src={path} title={title}/> : <img src={path} alt={`${title}, issued by ${organization}`}/> : <div className="document-empty"><Icon/><p className="eyebrow">Document preview unavailable</p><h2>The viewer is ready.</h2><p>Add the verified file to <code>public{path}</code>. This page will display it automatically without any code changes.</p><Link className="primary-link" href="/recognition">Return to recognition <ArrowLeft/></Link></div>}</div></article><SiteFooter/></main>
}
