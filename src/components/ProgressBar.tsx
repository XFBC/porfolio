interface ProgressBarProps {
  progress: number
}

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mb-2">
      <div
        className="h-3 rounded-xl bg-gradientText w-3/4"
        role="progressbar"
        aria-valuenow={props.progress}
        style={{ width: `${props.progress}%` }}
      />
    </div>
  )
}
