import type { Project } from "@/lib/portfolio-data"

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${project.accent} ${compact ? "is-compact" : ""}`} aria-label={`Illustrative preview for ${project.name}`} role="img">
      <div className="visual-topline"><span /><span /><span /><small>illustrative preview</small></div>
      {project.slug === "speakup-yuva-ai" && <div className="voice-lines" aria-hidden="true">{[22,42,64,86,58,36,72,48,26,60,78,40].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div>}
      {project.slug === "codeverse-os" && <div className="os-window" aria-hidden="true"><aside>{[1,2,3,4].map(i=><i key={i}/>)}</aside><div className="sort-bars">{[5,3,8,4,7,2,6].map((h,i)=><i key={i} style={{height:`${h*10}%`}} />)}</div></div>}
      {project.slug === "echotab" && <div className="memory-stack" aria-hidden="true">{["research / interfaces","voice ai resources","canvas experiments"].map((text,i)=><div key={text} style={{transform:`translateY(${i*42}px) translateX(${i*12}px)`}}><span>{text}</span><b>↗</b></div>)}</div>}
      {project.slug === "neural-arena" && <div className="neural-map" aria-hidden="true">{[3,5,4].map((count,col)=><div key={col}>{Array.from({length:count}).map((_,i)=><i key={i}/>)}</div>)}</div>}
      {project.slug === "quantum-canvas" && <div className="wave-field" aria-hidden="true">{Array.from({length:7}).map((_,i)=><i key={i} style={{transform:`rotate(${i*12-36}deg) scaleX(${1+i*.06})`}} />)}</div>}
      <p>{project.name}</p>
    </div>
  )
}
