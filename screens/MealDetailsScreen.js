import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import SubTitle from '../components/SubTitle'
import List from '../components/List'
import IconButton from '../components/IconButton'
import { FavoritesContext } from '../store/context/favorites-context'

const MealDetailsScreen = ({ route, navigation }) => {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)

    function changeFavoriteStatusHandler() {
        if(mealIsFavorite){
            favoriteMealsCtx.removeFavorite(mealId)
        }else favoriteMealsCtx.addFavorite(mealId)
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    onPress={changeFavoriteStatusHandler}
                    icon={mealIsFavorite?'star':'star-outline' }
                    color="white"
                />
            }
        })
    },[navigation,changeFavoriteStatusHandler])
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