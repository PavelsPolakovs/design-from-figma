import { useState } from 'react'
import { CloseChatsModal } from './components/CloseChatsModal'

function App() {
  const [open, setOpen] = useState(true)

  return (
    <div className="oaf:min-h-screen oaf:bg-[#1a1a1a] oaf:flex oaf:flex-col oaf:items-center oaf:justify-center oaf:gap-4">
      {open && (
        <CloseChatsModal
          onCancel={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      )}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="oaf:px-4 oaf:py-2 oaf:bg-[#333] oaf:text-white/70 oaf:text-sm oaf:rounded-lg oaf:cursor-pointer"
        >
          Show modal
        </button>
      )}
    </div>
  )
}

export default App