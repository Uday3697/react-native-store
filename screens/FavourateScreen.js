import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import MealsList from '../components/LealsList/MealsList'
import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'
import { useSelector } from 'react-redux'

const FavourateScreen = () => {
  //  const favoriteMealsCtx= useContext(FavoritesContext) //earlier using it  for context api
  const favoriteMealIds=useSelector(state=>state.favoriteMeals.ids)
  // const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id)) //earlier using it  for context api
  const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id))

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have No Favorite Meals </Text>
      </View>
    )
  }


  return (
    <MealsList items={favoriteMeals} />
  )
}

export default FavourateScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'

  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})