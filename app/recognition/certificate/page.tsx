import type { Metadata } from "next"
import { existsSync } from "node:fs"
import path from "node:path"
import { DocumentViewer } from "@/components/portfolio/document-viewer"
import { recognition } from "@/lib/portfolio-data"

const item = recognition[0]

export const metadata: Metadata = { 
  title: "India Book of Records Certificate — Saahas Ludhra", 
  description: "Certificate viewer for Saahas Ludhra's confirmed India Book of Records entry." 
}

export default function CertificatePage() { 
  const available = existsSync(path.join(process.cwd(), "public", item.path))
  const isPdf = item.path.toLowerCase().endsWith(".pdf")
  
  return (
    <main className="min-h-screen w-full bg-background flex flex-col items-center justify-start py-8 px-4 md:px-8">
      <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col h-[85vh] min-h-[700px]">
        <DocumentViewer 
          kind={isPdf ? "pdf" : "image"} 
          path={item.path} 
          title={item.title} 
          organization={item.organization} 
          date={item.detail} 
          available={available}
        />
      </div>
    </main>
  )
}