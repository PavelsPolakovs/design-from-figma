import avatarSrc from '../../assets/designer-avatar.svg'

type DesignerCardProps = {
  name?: string
}

export function DesignerCard({ name = 'Artem Lepilin' }: DesignerCardProps) {
  return (
    <div className="oaf:flex oaf:items-center oaf:gap-6 oaf:shrink-0">
      {/* Avatar circle */}
      <div
        className="oaf:flex oaf:flex-col oaf:items-center oaf:justify-end oaf:overflow-hidden oaf:rounded-full oaf:shrink-0"
        style={{
          width: 88,
          height: 88,
          background: 'rgba(166,173,180,0.34)',
          paddingBottom: 12,
          paddingTop: 16,
          paddingLeft: 12,
          paddingRight: 12,
        }}
      >
        <img src={avatarSrc} alt="" style={{ height: 73, width: 60 }} />
      </div>

      {/* Name */}
      <span
        className="oaf:shrink-0"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: 48,
          lineHeight: 1.15,
          opacity: 0.8,
          letterSpacing: '-0.96px',
          color: 'white',
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </span>
    </div>
  )
}