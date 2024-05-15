import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import SubTitle from '../components/SubTitle'
import List from '../components/List'
import IconButton from '../components/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/redux/favorite'

// import { FavoritesContext } from '../store/context/favorites-context'  //earlier using it  for context api


const MealDetailsScreen = ({ route, navigation }) => {
    // const favoriteMealsCtx = useContext(FavoritesContext);  //earlier using it  for context api

    const favoriteMealIds = useSelector((state) =>  state.favoriteMeals.ids );
    const dispatch = useDispatch()

    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)  //earlier using it  for context api
    const mealIsFavorite = favoriteMealIds.includes(mealId)

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            // favoriteMealsCtx.removeFavorite(mealId)  //earlier using it  for context api
            dispatch(removeFavorite({id:mealId}))
        } else
            // favoriteMealsCtx.addFavorite(mealId)  //earlier using it  for context api
            dispatch(addFavorite({id:mealId}))
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    onPress={changeFavoriteStatusHandler}
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                    color="white"
                />
            }
        })
    }, [navigation, changeFavoriteStatusHandler])
    return (
        <ScrollView  >
            <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Indegrendts</SubTitle>
                    <List data={selectedMeal.ingredients} />
                    <SubTitle>Steps</SubTitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>


        </ScrollView>
    )
}

export default MealDetailsScreen

const styles = StyleSheet.create({

    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontWeight: "bold",
        margin: 8,
        fontSize: 24,
        textAlign: "center",
        color: "white"

    },
    detailText: {
        color: "white"
    },

    listContainer: {
        width: "80%",
        textAlign: "center"
    },
    listOuterContainer: {
        alignItems: "center"
    }

})