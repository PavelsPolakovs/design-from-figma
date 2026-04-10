import logoDark from '../../assets/oojo-logo-dark.svg'
import logoLight from '../../assets/oojo-logo-light.svg'

type OojoLogoProps = {
  variant?: 'light' | 'dark'
  className?: string
}

export function OojoLogo({ variant = 'dark', className }: OojoLogoProps) {
  return (
    <div className={`oaf:shrink-0 ${className ?? ''}`}>
      <img
        src={variant === 'dark' ? logoDark : logoLight}
        alt="Oojo"
        className="oaf:h-[90px] oaf:w-auto"
      />
    </div>
  )
}