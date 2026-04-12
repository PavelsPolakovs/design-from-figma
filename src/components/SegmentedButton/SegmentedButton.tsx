import type { ReactNode } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

/** A single segment within the segmented button. */
export interface SegmentItem {
  /** Unique identifier used to track selection state. */
  value: string
  /** Label text shown inside the segment. */
  label?: string
  /**
   * Optional leading icon rendered when the segment is **not** selected.
   * When selected, the checkmark icon always takes the leading position instead.
   */
  icon?: ReactNode
}

export interface SegmentedButtonProps {
  /** Ordered list of segments to render. */
  segments: SegmentItem[]
  /** Currently selected value(s). Pass `[]` to start with nothing selected. */
  selected: string[]
  /** Called with the new selection array whenever the user clicks a segment. */
  onChange: (selected: string[]) => void
  /**
   * Accessible label for the control group (mapped to `aria-label`).
   * Provide a descriptive string when there is no visible heading nearby.
   */
  'aria-label'?: string
  /**
   * When `true`, multiple segments can be active at the same time.
   * Defaults to `false` (single-select / radio behaviour).
   */
  multiSelect?: boolean
}

// ─── Internal icon ────────────────────────────────────────────────────────────

/**
 * 18 × 18 checkmark icon rendered inside a selected segment.
 * Path is the Material Design "check" glyph scaled from the 24 × 24 grid.
 */
function CheckIcon() {
  return (
    <svg
      className="oaf:w-4.5 oaf:h-4.5 oaf:shrink-0"
      viewBox="0 0 18 18"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6.75 12.128 3.623 9l-1.065 1.058L6.75 14.25l9-9-1.058-1.058z" />
    </svg>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SegmentedButton({
  segments,
  selected,
  onChange,
  'aria-label': ariaLabel,
  multiSelect = false,
}: SegmentedButtonProps) {
  const handleClick = (value: string) => {
    if (multiSelect) {
      onChange(
        selected.includes(value)
          ? selected.filter((v) => v !== value)
          : [...selected, value],
      )
    } else {
      onChange([value])
    }
  }

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="oaf:inline-flex oaf:items-stretch"
    >
      {segments.map((segment, index) => {
        const isFirst = index === 0
        const isLast = index === segments.length - 1
        const isOnly = isFirst && isLast
        const isSelected = selected.includes(segment.value)

        return (
          <button
            key={segment.value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => handleClick(segment.value)}
            className={[
              // ── Layout ─────────────────────────────────────────────────────
              'oaf:relative oaf:inline-flex oaf:items-center oaf:justify-center oaf:gap-2',
              // ── Size ───────────────────────────────────────────────────────
              // h-10 = 40 px visual container; py-2.5 = 10 px vertical padding
              // px-3  = 12 px horizontal padding  (Figma: paddingLeft/Right 12)
              'oaf:h-10 oaf:px-3 oaf:py-2.5',
              // ── Typography — Roboto Medium 14 / lh 20 / ls +0.1 px ────────
              'oaf:font-roboto oaf:text-[14px] oaf:font-medium oaf:leading-5 oaf:tracking-[0.1px]',
              // ── Border ─────────────────────────────────────────────────────
              'oaf:border oaf:border-outline',
              // ── Corner radius ──────────────────────────────────────────────
              // First segment → left corners fully rounded
              // Last  segment → right corners fully rounded
              // Only  segment → all corners fully rounded
              isOnly
                ? 'oaf:rounded-full'
                : isFirst
                  ? 'oaf:rounded-l-full'
                  : isLast
                    ? 'oaf:rounded-r-full'
                    : '',
              // Negative left margin collapses the shared border to 1 px
              !isFirst && 'oaf:-ml-px',
              // ── Colour scheme ──────────────────────────────────────────────
              isSelected
                ? [
                    'oaf:bg-secondary oaf:text-on-secondary',
                    // Elevate above neighbours so the full border stays visible
                    'oaf:z-10',
                    // Hover: 8 % white state-layer over the secondary fill
                    'oaf:hover:bg-[color-mix(in_srgb,#ffffff_8%,#7c6ba7)]',
                  ]
                : [
                    'oaf:bg-transparent oaf:text-on-surface',
                    // Hover: 8 % on-surface state-layer
                    'oaf:hover:bg-[rgba(29,27,32,0.08)]',
                  ],
              // ── Interaction ────────────────────────────────────────────────
              'oaf:cursor-pointer oaf:select-none',
              // ── Transition ─────────────────────────────────────────────────
              'oaf:transition-[background-color,color] oaf:duration-200 oaf:ease-in-out',
              // ── Focus ──────────────────────────────────────────────────────
              'oaf:outline-none',
              'oaf:focus-visible:z-20',
              'oaf:focus-visible:ring-2 oaf:focus-visible:ring-outline oaf:focus-visible:ring-offset-1',
            ]
              .flat()
              .filter(Boolean)
              .join(' ')}
          >
            {/* Leading icon area ─────────────────────────────────────────── */}
            {isSelected ? (
              <CheckIcon />
            ) : (
              segment.icon != null && segment.icon
            )}

            {/* Label ─────────────────────────────────────────────────────── */}
            {segment.label != null && <span>{segment.label}</span>}
          </button>
        )
      })}
    </div>
  )
}

