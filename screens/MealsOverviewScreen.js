import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const MealsOverviewScreen = ({ route }) => {
    const catId = route.params.categoryId


    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    function  renderMealItem(itemData){
        const item=itemData.item
        const mealItemProps={
            title:item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            complexity:item.complexity,
            duration:item.duration

        }
        return (
            <MealItem {...mealItemProps}/>
        )
    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <FlatList
                    data={displayedMeals}
                    renderItem={renderMealItem}
                    keyExtractor={(item)=>item.id}
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