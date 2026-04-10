type UpdateLabelProps = {
  month?: string
  year?: string
}

const greyTransBg = 'rgba(166,173,180,0.34)'

export function UpdateLabel({ month = '03', year = '25' }: UpdateLabelProps) {
  return (
    <div
      className="oaf:relative oaf:flex oaf:items-center oaf:gap-4 oaf:h-[88px] oaf:pl-2 oaf:pr-8 oaf:py-4 oaf:rounded-full oaf:shrink-0"
    >
      {/* Frosted background */}
      <div
        aria-hidden="true"
        className="oaf:absolute oaf:inset-0 oaf:rounded-full oaf:mix-blend-luminosity oaf:pointer-events-none"
        style={{ backdropFilter: 'blur(2px)', background: greyTransBg }}
      />

      {/* "Updated" pill */}
      <div
        className="oaf:relative oaf:flex oaf:flex-col oaf:items-center oaf:justify-center oaf:h-[72px] oaf:px-8 oaf:rounded-[40px]"
        style={{ background: greyTransBg }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 32,
            lineHeight: 1.3,
            color: '#e8ebee',
            letterSpacing: '-1.28px',
            whiteSpace: 'nowrap',
          }}
        >
          Updated
        </span>
      </div>

      {/* Date */}
      <div className="oaf:relative oaf:flex oaf:flex-col oaf:items-center oaf:justify-center">
        <span
          className="oaf:uppercase"
          style={{
            fontFamily: "'Helvetica Neue', sans-serif",
            fontSize: 16,
            lineHeight: 1.25,
            color: '#a6adb4',
            letterSpacing: '0.05em',
          }}
        >
          Month / Year
        </span>
        <div
          className="oaf:flex oaf:items-center oaf:gap-1.5"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 40,
            lineHeight: 1.2,
            color: '#ffffff',
            letterSpacing: '0.4px',
          }}
        >
          <span>{month}</span>
          <span>/</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  )
}