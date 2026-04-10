/** Decorative stacked card columns shown bottom-right of the cover */
export function ProcessIllustrations({ className }: { className?: string }) {
  return (
    <div
      className={`oaf:absolute oaf:pointer-events-none ${className ?? ''}`}
      style={{ width: 528, height: 528, bottom: -140, right: -179 }}
    >
      {/* Column 1 — left, yellow solid */}
      <div
        className="oaf:absolute oaf:rounded-3xl"
        style={{
          width: 154,
          height: 393,
          left: 20,
          top: 92,
          background: '#ffd214',
          boxShadow: '0px 29.568px 25.555px 0px rgba(215,142,0,0.2)',
        }}
      >
        <div className="oaf:absolute oaf:inset-0 oaf:rounded-[inherit]" style={{ boxShadow: 'inset 0px 4.224px 23.338px 0px rgba(255,255,255,0.1), inset 0px 4.224px 2.112px 0px rgba(255,255,255,0.4)' }} />
      </div>

      {/* Small top chip on column 1 */}
      <div
        className="oaf:absolute oaf:rounded-3xl"
        style={{
          width: 103,
          height: 24,
          left: 46,
          top: 137,
          background: 'linear-gradient(to bottom, #fef8e1, #fcedc8)',
          boxShadow: '0px 29.568px 25.555px 0px rgba(215,142,0,0.2)',
        }}
      >
        <div className="oaf:absolute oaf:inset-0 oaf:rounded-[inherit]" style={{ boxShadow: 'inset 0px 4.224px 23.338px 0px rgba(255,255,255,0.1), inset 0px 4.224px 2.112px 0px rgba(255,255,255,0.4)' }} />
      </div>

      {/* Small bottom chip on column 1 */}
      <div
        className="oaf:absolute oaf:rounded-3xl"
        style={{
          width: 103,
          height: 82,
          left: 46,
          top: 344,
          background: 'linear-gradient(to bottom, #fef8e1, #fcedc8)',
          boxShadow: '0px 29.568px 25.555px 0px rgba(215,142,0,0.2)',
        }}
      >
        <div className="oaf:absolute oaf:inset-0 oaf:rounded-[inherit]" style={{ boxShadow: 'inset 0px 4.224px 23.338px 0px rgba(255,255,255,0.1), inset 0px 4.224px 2.112px 0px rgba(255,255,255,0.4)' }} />
      </div>

      {/* Column 2 — center, frosted glass */}
      <div
        className="oaf:absolute oaf:rounded-3xl"
        style={{
          width: 175,
          height: 429,
          left: 178,
          top: 55,
          backdropFilter: 'blur(35.9px)',
          background: 'rgba(255,216,52,0.2)',
          boxShadow: '0px 5.28px 21.437px 0px rgba(215,142,0,0.2), 0px 52.8px 25.555px 0px rgba(215,142,0,0.1)',
        }}
      >
        <div className="oaf:absolute oaf:inset-0 oaf:rounded-[inherit]" style={{ boxShadow: 'inset 0px 2.112px 4.224px 0px rgba(255,255,255,0.6)' }} />
      </div>

      {/* Small top chip on column 2 */}
      <div
        className="oaf:absolute oaf:rounded-3xl"
        style={{
          width: 95,
          height: 24,
          left: 222,
          top: 117,
          background: 'linear-gradient(to bottom, #fef8e1, #fcedc8)',
          boxShadow: '0px 29.568px 25.555px 0px rgba(215,142,0,0.2)',
        }}
      >
        <div className="oaf:absolute oaf:inset-0 oaf:rounded-[inherit]" style={{ boxShadow: 'inset 0px 4.224px 23.338px 0px rgba(255,255,255,0.1), inset 0px 4.224px 2.112px 0px rgba(255,255,255,0.4)' }} />
      </div>

      {/* Small bottom chip on column 2 */}
      <div
        className="oaf:absolute oaf:rounded-3xl"
        style={{
          width: 95,
          height: 82,
          left: 219,
          top: 352,
          background: '#ffd834',
          boxShadow: '0px 29.568px 25.555px 0px rgba(215,142,0,0.2)',
        }}
      >
        <div className="oaf:absolute oaf:inset-0 oaf:rounded-[inherit]" style={{ boxShadow: 'inset 0px 4.224px 23.338px 0px rgba(255,255,255,0.1), inset 0px 4.224px 2.112px 0px rgba(255,255,255,0.4)' }} />
      </div>

      {/* Column 3 — right, cream gradient */}
      <div
        className="oaf:absolute oaf:rounded-3xl"
        style={{
          width: 150,
          height: 344,
          left: 357,
          top: 146,
          background: 'linear-gradient(to bottom, #fef8e1, #fcedc8)',
          boxShadow: '0px 29.568px 25.555px 0px rgba(215,142,0,0.2)',
        }}
      >
        <div className="oaf:absolute oaf:inset-0 oaf:rounded-[inherit]" style={{ boxShadow: 'inset 0px 4.224px 23.338px 0px rgba(255,255,255,0.1), inset 0px 4.224px 2.112px 0px rgba(255,255,255,0.4)' }} />
      </div>

      {/* Small chip on column 3 */}
      <div
        className="oaf:absolute oaf:rounded-3xl"
        style={{
          width: 103,
          height: 70,
          left: 383,
          top: 197,
          background: '#ffd214',
          boxShadow: '0px 29.568px 25.555px 0px rgba(215,142,0,0.2)',
        }}
      >
        <div className="oaf:absolute oaf:inset-0 oaf:rounded-[inherit]" style={{ boxShadow: 'inset 0px 4.224px 23.338px 0px rgba(255,255,255,0.1), inset 0px 4.224px 2.112px 0px rgba(255,255,255,0.4)' }} />
      </div>

      {/* Bottom chip on column 3 */}
      <div
        className="oaf:absolute oaf:rounded-3xl"
        style={{
          width: 103,
          height: 21,
          left: 383,
          top: 389,
          background: '#ffd214',
          boxShadow: '0px 29.568px 25.555px 0px rgba(215,142,0,0.2)',
        }}
      >
        <div className="oaf:absolute oaf:inset-0 oaf:rounded-[inherit]" style={{ boxShadow: 'inset 0px 4.224px 23.338px 0px rgba(255,255,255,0.1), inset 0px 4.224px 2.112px 0px rgba(255,255,255,0.4)' }} />
      </div>
    </div>
  )
}