import { OojoLogo } from './OojoLogo'
import { LibraryBadge } from './LibraryBadge'

export function CoverHeader() {
  return (
    <div className="oaf:flex oaf:items-center oaf:justify-between oaf:w-full oaf:shrink-0">
      <OojoLogo variant="dark" />
      <LibraryBadge />
    </div>
  )
}