const warningIconSrc =
  'https://www.figma.com/api/mcp/asset/186ce3d3-fa55-44c8-a6a9-d64c51beea48'

interface CloseChatsModalProps {
  onCancel?: () => void
  onConfirm?: () => void
}

export function CloseChatsModal({ onCancel, onConfirm }: CloseChatsModalProps) {
  return (
    <div className="oaf:flex oaf:flex-col oaf:w-[280px] oaf:bg-[#222] oaf:border-2 oaf:border-white/5 oaf:rounded-xl oaf:overflow-hidden oaf:shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.08),0px_20px_25px_-5px_rgba(0,0,0,0.14)]">
      {/* Header */}
      <div className="oaf:flex oaf:flex-col oaf:gap-2 oaf:pt-3 oaf:px-3 oaf:pb-1.5">
        <img src={warningIconSrc} alt="" aria-hidden="true" className="oaf:w-6 oaf:h-6" />

        <p className="oaf:text-sm oaf:font-bold oaf:leading-5 oaf:text-[#d7d7d7]">
          Would you like to close all opened chats?
        </p>

        <p className="oaf:text-[10px] oaf:leading-3 oaf:text-white/60">
          Will be closed all opened conversation windows and all chats in collapsed chats list
        </p>
      </div>

      {/* Footer */}
      <div className="oaf:flex oaf:gap-3 oaf:p-3">
        <button
          type="button"
          onClick={onCancel}
          className="oaf:flex-1 oaf:h-6 oaf:bg-[#18181b] oaf:border oaf:border-white/20 oaf:rounded-[6px] oaf:text-[10px] oaf:font-semibold oaf:text-white oaf:shadow-xs oaf:cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="oaf:flex-1 oaf:h-6 oaf:bg-[#ff9393] oaf:rounded-[6px] oaf:text-[10px] oaf:font-semibold oaf:text-[#121212] oaf:shadow-xs oaf:cursor-pointer"
        >
          Close all
        </button>
      </div>
    </div>
  )
}