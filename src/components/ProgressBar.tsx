import * as Progress from '@radix-ui/react-progress'

interface ProgressBarProps {
  progress: number
}

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mb-2">
   
      <Progress.Root className="ProgressRoot h-3 rounded-xl bg-zinc-700 w-full mb-2" value={66}>
        <Progress.Indicator
          className="ProgressIndicator h-3 rounded-xl bg-gradientText w-3/4"
          style={{ width: `${props.progress}%` }}
        />
      </Progress.Root>
    </div>
  )
}
