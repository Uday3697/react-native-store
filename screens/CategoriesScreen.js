import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'


const CategoriesScreen = ({ navigation }) => {
    function renderCategoryItem(itemData) {
        function handlePress() {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id
            })
        }

        return (
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={handlePress} />
        )
    }

    return (
        <View>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({

})