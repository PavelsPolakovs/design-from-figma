type LibraryBadgeProps = {
  label?: string
}

export function LibraryBadge({ label = 'Library' }: LibraryBadgeProps) {
  return (
    <div className="oaf:relative oaf:flex oaf:items-center oaf:justify-center oaf:px-8 oaf:py-4 oaf:rounded-full oaf:shrink-0">
      <div
        aria-hidden="true"
        className="oaf:absolute oaf:inset-0 oaf:rounded-full oaf:pointer-events-none"
        style={{ backgroundColor: 'var(--cover-badge-bg, #ffc4f6)' }}
      />
      <span
        className="oaf:relative oaf:font-medium oaf:uppercase"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 48,
          lineHeight: 1.3,
          color: 'var(--cover-badge-text, #000)',
        }}
      >
        {label}
      </span>
    </div>
  )
}