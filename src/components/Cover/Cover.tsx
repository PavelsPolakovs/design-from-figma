import { CoverHeader } from './CoverHeader'
import { DesignerCard } from './DesignerCard'
import { ProcessIllustrations } from './ProcessIllustrations'
import { UpdateLabel } from './UpdateLabel'

const coverBg = `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1700 960' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-88.726 -75.55 51.368 -53.238 2001.3 1157)'><stop stop-color='rgba(157,132,44,1)' offset='0'/><stop stop-color='rgba(117,99,33,1)' offset='0.25'/><stop stop-color='rgba(78,66,22,1)' offset='0.5'/><stop stop-color='rgba(59,49,17,1)' offset='0.625'/><stop stop-color='rgba(39,33,11,1)' offset='0.75'/><stop stop-color='rgba(20,16,6,1)' offset='0.875'/><stop stop-color='rgba(10,8,3,1)' offset='0.9375'/><stop stop-color='rgba(0,0,0,1)' offset='1'/></radialGradient></defs></svg>")`

type CoverProps = {
  /** Designer name shown at the bottom */
  designerName?: string
  /** Month of last update (two digits) */
  month?: string
  /** Year of last update (two digits) */
  year?: string
}

export function Cover({ designerName, month, year }: CoverProps) {
  return (
    <div
      className="oaf:relative oaf:overflow-hidden oaf:w-[1700px] oaf:h-[960px]"
      style={{ backgroundImage: coverBg }}
    >
      {/* Main content column */}
      <div className="oaf:absolute oaf:inset-0 oaf:flex oaf:flex-col oaf:gap-[72px] oaf:px-[141px] oaf:py-[72px]">
        {/* Header: logo + badge */}
        <CoverHeader />

        {/* Title */}
        <h1
          className="oaf:shrink-0 oaf:m-0"
          style={{
            fontFamily: "'Helvetica Neue', 'Helvetica', sans-serif",
            fontWeight: 400,
            fontSize: 104,
            lineHeight: 1.1,
            letterSpacing: '-1.04px',
            color: 'white',
            width: 1043,
            maxWidth: '100%',
          }}
        >
          Icons &amp; Illustrations
        </h1>

        {/* Footer row: designer + update label */}
        <div className="oaf:flex oaf:items-center oaf:justify-between oaf:w-[997px] oaf:shrink-0">
          <DesignerCard name={designerName} />
          <UpdateLabel month={month} year={year} />
        </div>
      </div>

      {/* Decorative illustrations (absolute, bottom-right) */}
      <ProcessIllustrations />
    </div>
  )
}