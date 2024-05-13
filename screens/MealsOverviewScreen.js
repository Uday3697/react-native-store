import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {  useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId


    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

  
    function renderMealItem(itemData) {
        const item = itemData.item
        const mealItemProps = {
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

    useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title
        navigation.setOptions({
            title: categoryTitle
        })
    
    },[catId,navigation])

    return (
        <View style={styles.container}>
            <ScrollView>
                <FlatList
                    data={displayedMeals}
                    renderItem={renderMealItem}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})