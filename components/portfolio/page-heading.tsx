export function PageHeading({ eyebrow, title, italic, intro }: { eyebrow: string; title: string; italic: string; intro: string }) {
  return (
    <section className="page-heading shell">
      <p className="eyebrow">{eyebrow}</p>
      <div className="page-heading-grid">
        <h1>{title}<br/><em>{italic}</em></h1>
        <p>{intro}</p>
      </div>
    </section>
  )
}
