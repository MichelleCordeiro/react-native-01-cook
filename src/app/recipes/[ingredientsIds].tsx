import { FlatList, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'

import { Recipe } from '@/components/Recipe'
import { services } from '@/services'
import { styles } from './styles'
import { Ingredients } from '@/components/Ingredients'

export default function Recipes() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
  const params = useLocalSearchParams<{ ingredientsIds: string }>()
  // console.log(params)

  const ingredientsIds = params.ingredientsIds.split(',')

  useEffect(() => {
    services.ingredientes.findByIds(ingredientsIds).then(setIngredients);
  },[])
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name='arrow-back' size={32} onPress={() => router.back()} />

        <Text style={styles.title}>Ingredientes</Text>

        <Ingredients ingredients={ingredients} />

        <FlatList
          data={['1']}
          keyExtractor={item => item}
          renderItem={() => (
            <Recipe
              recipe={{
                name: 'Omelete',
                image: 'https://i.postimg.cc/sXyQSpKJ/omelete.jpg',
                minutes: 10
              }}
            />
          )}
        />
      </View>
    </View>
  )
}