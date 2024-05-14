import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import SubTitle from '../components/SubTitle'
import List from '../components/List'
import IconButton from '../components/IconButton'
const MealDetailsScreen = ({ route ,navigation}) => {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    function headerbuttonPressHandler(){
        console.log("presss")
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton  onPress={headerbuttonPressHandler} icon='star' color="white"/>
            }
        })
    })
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