import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
const MealDetailsScreen = ({route}) => {
    const mealId=route.params.mealId
    const selectedMeal=MEALS.find((meal)=>meal.id===mealId)
  return (
    <View>
      <Image />
      <Text></Text>
      <View>

      </View>
      <Text>Indegrendts</Text>
      <Text>steps</Text>
    </View>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({})