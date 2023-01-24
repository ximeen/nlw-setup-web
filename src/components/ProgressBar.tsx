interface ProgressBarProps {
  progressStatus: number
}

export function ProgressBar({ progressStatus }: ProgressBarProps) {
  return (
    <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
      <div
        role="progressbar"
        aria-label='Progressos de habitos completos'
        aria-valuenow={progressStatus}
        className='h-3 rounded-xl bg-violet-600 w-3/4'
        style={{ width: `${progressStatus}%` }}
      />
    </div>
  )
} 