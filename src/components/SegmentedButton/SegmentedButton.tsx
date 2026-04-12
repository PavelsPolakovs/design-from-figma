import type { CSSProperties, ReactNode } from 'react'

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
  /**
   * Visual colour variant.
   * - `primary`   — blue  (default)
   * - `secondary` — orange
   * - `danger`    — red
   */
  variant?: 'primary' | 'secondary' | 'danger'
  /**
   * Height preset.
   * - `sm` — 32 px
   * - `md` — 40 px (default)
   * - `lg` — 48 px
   */
  size?: 'sm' | 'md' | 'lg'
  /** When `true` all segments are non-interactive and rendered with disabled styles. */
  disabled?: boolean
}

// ─── Variant colour tokens ────────────────────────────────────────────────────

const VARIANT_COLORS = {
  primary: {
    selected:        '#1976d2',
    selectedHover:   'color-mix(in srgb, white 8%, #1976d2)',
    container:       '#e3f2fd',
    containerHover:  '#bbdefb',
    border:          '#90caf9',
    onSelected:      '#ffffff',
    onUnselected:    '#414141',
  },
  secondary: {
    selected:        '#f57c00',
    selectedHover:   'color-mix(in srgb, white 8%, #f57c00)',
    container:       '#fff8e1',
    containerHover:  '#ffe0b2',
    border:          '#ffe082',
    onSelected:      '#ffffff',
    onUnselected:    '#414141',
  },
  danger: {
    selected:        '#d32f2f',
    selectedHover:   'color-mix(in srgb, white 8%, #d32f2f)',
    container:       '#ffebee',
    containerHover:  '#ffcdd2',
    border:          '#e57373',
    onSelected:      '#ffffff',
    onUnselected:    '#414141',
  },
} as const

// ─── Size → height class ──────────────────────────────────────────────────────

const SIZE_HEIGHT = {
  sm: 'oaf:h-8',   // 32 px
  md: 'oaf:h-10',  // 40 px
  lg: 'oaf:h-12',  // 48 px
} as const

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
  variant = 'primary',
  size = 'md',
  disabled = false,
}: SegmentedButtonProps) {
  const colors = VARIANT_COLORS[variant]

  const handleClick = (value: string) => {
    if (disabled) return
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
      aria-disabled={disabled || undefined}
      className="oaf:inline-flex oaf:items-stretch"
      style={{
        '--sb-selected':        colors.selected,
        '--sb-selected-hover':  colors.selectedHover,
        '--sb-container':       colors.container,
        '--sb-container-hover': colors.containerHover,
        '--sb-border':          colors.border,
        '--sb-on-selected':     colors.onSelected,
        '--sb-on-unselected':   colors.onUnselected,
      } as CSSProperties}
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
            disabled={disabled}
            onClick={() => handleClick(segment.value)}
            className={[
              // ── Layout ─────────────────────────────────────────────────────
              'oaf:relative oaf:inline-flex oaf:items-center oaf:justify-center oaf:gap-2',
              // ── Size ───────────────────────────────────────────────────────
              // Height varies by prop; padding is 8 px (p-2) on all sides
              SIZE_HEIGHT[size],
              'oaf:p-2',
              // ── Typography — Roboto Medium 14 / lh 20 / ls +0.1 px ────────
              'oaf:font-roboto oaf:text-[14px] oaf:font-medium oaf:leading-5 oaf:tracking-[0.1px]',
              // ── Border ─────────────────────────────────────────────────────
              'oaf:border',
              disabled
                ? 'oaf:border-(--color-sb-disabled-border)'
                : 'oaf:border-(--sb-border)',
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
              disabled
                ? [
                    'oaf:bg-(--color-sb-disabled-bg)',
                    'oaf:text-(--color-sb-disabled-text)',
                    'oaf:cursor-not-allowed',
                  ]
                : isSelected
                  ? [
                      'oaf:bg-(--sb-selected)',
                      'oaf:text-(--sb-on-selected)',
                      // Elevate above neighbours so the full border stays visible
                      'oaf:z-10',
                      'oaf:hover:bg-(--sb-selected-hover)',
                    ]
                  : [
                      'oaf:bg-(--sb-container)',
                      'oaf:text-(--sb-on-unselected)',
                      'oaf:hover:bg-(--sb-container-hover)',
                    ],
              // ── Interaction ────────────────────────────────────────────────
              !disabled && 'oaf:cursor-pointer oaf:select-none',
              // ── Transition ─────────────────────────────────────────────────
              'oaf:transition-[background-color,color] oaf:duration-200 oaf:ease-in-out',
              // ── Focus ──────────────────────────────────────────────────────
              'oaf:outline-none',
              !disabled && [
                'oaf:focus-visible:z-20',
                'oaf:focus-visible:ring-2 oaf:focus-visible:ring-(--sb-border) oaf:focus-visible:ring-offset-1',
              ],
            ]
              .flat()
              .filter(Boolean)
              .join(' ')}
          >
            {/* Leading icon area ─────────────────────────────────────────── */}
            {isSelected && !disabled ? (
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
