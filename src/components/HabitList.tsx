import * as Checkbox from '@radix-ui/react-checkbox';
import dayjs from 'dayjs';
import { Check } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface HabitDaysPropsDate {
  date: Date;
}

interface HabitsListInfo {
  possibleHabits: Array<{
    id: string;
    title: string;
    created_at: string;
  }>,
  completedHabits: string[]
}

export function HabitList({ date }: HabitDaysPropsDate) {

  const [habitsListInfo, setHabitsListInfo] = useState<HabitsListInfo>()

  const isDateInPast = dayjs(date).endOf('day').isBefore(new Date())

  useEffect(() => {
    api.get('day', {
      params: {
        date: date.toISOString(),
      }
    }).then(response => {
      setHabitsListInfo(response.data)
    })

  }, [])

  async function handleToggleHabitCheck(habitId: string) {
    api.patch(`/habits/${habitId}/toggle`)

    const isHabitAlreadyCompleted = habitsListInfo!.completedHabits.includes(habitId)

    let completedHabits: string[] = []

    if (isHabitAlreadyCompleted) {
      completedHabits = habitsListInfo!.completedHabits.filter(id => id !== habitId)

    } else {
      completedHabits = [...habitsListInfo!.completedHabits, habitId]

    }
    setHabitsListInfo({
      possibleHabits: habitsListInfo!.possibleHabits,
      completedHabits,
    })
  }


  return (
    <div className="flex flex-col gap-3 mt-6">

      {habitsListInfo?.possibleHabits.map(habit => {
        return (
          <Checkbox.Root
            key={habit.id}
            onCheckedChange={() => handleToggleHabitCheck(habit.id)}
            checked={habitsListInfo.completedHabits.includes(habit.id)}
            disabled={isDateInPast}
            className='flex items-center gap-3 group'>

            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">

              <Checkbox.Indicator >
                <Check size={20} className="text-white" />
              </Checkbox.Indicator>

            </div>

            <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>{habit.title}</span>
          </Checkbox.Root>
        )
      })}

    </div>
  )
}