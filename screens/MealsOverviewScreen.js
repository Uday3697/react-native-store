import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/LealsList/MealItem'
import MealsList from '../components/LealsList/MealsList'



const MealsOverviewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId


    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })


    function renderMealItem(itemData) {
        const item = itemData.item
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration

        }
        return (
            <MealItem {...mealItemProps} />
        )
    }

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title
        navigation.setOptions({
            title: categoryTitle
        })

    }, [catId, navigation])

    return (
        <MealsList  items={displayedMeals}/>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})