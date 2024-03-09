import { ScrollView } from "react-native"

import { styles } from "./styles"
import { IngredientsProps } from "@/components/Ingredient"

type Props = {
  ingredients: IngredientsProps[]
}

export function Ingredients({ ingredients }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.ingredientsContent}
      showsHorizontalScrollIndicator={false}
    >
    </ScrollView>
  )
}
