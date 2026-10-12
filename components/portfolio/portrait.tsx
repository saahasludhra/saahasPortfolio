"use client"

import { useState } from "react"
import { portfolioAssets } from "@/lib/portfolio-data"

export function Portrait() {
  const [failed, setFailed] = useState(false)
  return (
    <figure className="portrait-frame">
      <div className="portrait-index" aria-hidden="true">16°</div>
      {!failed ? <img src={portfolioAssets.portrait} alt="Portrait of Saahas Ludhra" onError={() => setFailed(true)} /> : <div className="portrait-fallback" role="img" aria-label="Portrait unavailable"><span>SL</span><small>Portrait unavailable</small></div>}
      <figcaption><span>Saahas Ludhra</span><span>Student · Builder</span></figcaption>
    </figure>
  )
}
