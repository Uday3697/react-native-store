import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryGridTile = ({ title, color ,onPress}) => {
    
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable
                android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 5,
        backgroundColor: "white",
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
        overflow: Platform.OS === "android" ? "hidden" : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center"

    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    }
})