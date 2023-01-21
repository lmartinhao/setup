import * as Checkbox from "@radix-ui/react-checkbox";
import dayjs from "dayjs";
import { Check } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";

interface HabitListProps {
  date: Date;
}

interface HabitsInfoProps {
  possibleHabits: Array<{
    id: string;
    title: string;
    created_at: string;
  }>,
  completedHabits: string[];
}

export function HabitList({ date }: HabitListProps) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfoProps>();

  useEffect(() => {
    api.get('/day', {
      params: {
        date: date.toISOString(),
      }
    }).then((response => {
      setHabitsInfo(response.data)
    }))
  }, [])

  const isDateInPast = dayjs(date).endOf('day').isBefore(new Date());

  return (
    <div className='mt-6 flex flex-col gap-3'>
      {
        habitsInfo?.possibleHabits.map(habit => {
          return (
            <Checkbox.Root
              key={habit.id}
              checked={habitsInfo.completedHabits.includes(habit.id)}
              disabled={isDateInPast}
              className='flex items-center gap-3 group'
            >
              <div className='w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                <Checkbox.Indicator>
                  <Check size={20} className='text-white' />
                </Checkbox.Indicator>
              </div>
              <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
                {habit.title}
              </span>
            </Checkbox.Root>
          )
        })
      }
    </div>
  )
}
