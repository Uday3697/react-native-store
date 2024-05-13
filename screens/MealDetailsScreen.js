import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import SubTitle from '../components/SubTitle'
import List from '../components/List'
const MealDetailsScreen = ({ route }) => {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    return (
        <View >
            <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <SubTitle>Indegrendts</SubTitle>
            <List data={selectedMeal.ingredients} />
            <SubTitle>Steps</SubTitle>
            <List data={selectedMeal.steps} />

        </View>
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
        color:"white"

    },
    detailText: {
        color: "white"
    },

})