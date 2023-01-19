import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";

const availableWeekDays = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo"
]

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleToggleWeekDay(weekDayIndex: number) {
    if(weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex])
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}>

        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>
        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600"
        />

        <Text className="mt-4 mb-3 text-white font-semibold text-base">
          Qual a recorrência?
        </Text>

        {
          availableWeekDays.map((day, i) => {
            return (
              <Checkbox
                key={`${day} - ${i}`}
                frequency={day}
                checked={weekDays.includes(i)}
                onPress={() => handleToggleWeekDay(i)}
              />
            )
          })
        }
      </ScrollView>
    </View>
  );
}
