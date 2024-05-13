import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealItem = ({title,imageUrl,duration,complexity,affordability}) => {
  return (
    <View style={styles.mealItem}>
        <Pressable android_ripple={{color:"#ccc"}} 
        style={({ pressed }) =>pressed ? styles.buttonPressed : null}
        >
            <View> 
                <Image source={{uri:imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{duration}m</Text>
                <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:200
    },

    title:{
        fontWeight:"bold",
        fontSize:18,
        textAlign:"center",
        margin:8


    },
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:"hidden",
        backgroundColor:"white",
        elevation:4
    },
    details:{
        flexDirection:"row",
        alignItems:"center",
        padding:8,
        justifyContent:"center"
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12
    },

    buttonPressed: {
        opacity: 0.5
    }
})