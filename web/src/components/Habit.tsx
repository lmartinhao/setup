interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {

  return (
    <h1>{props.completed}</h1>
  )
}
