import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from './screens/WelcomeScreen'
import UserScreen from './screens/UserScreen'
import { Ionicons } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={{
                    headerStyle: { backgroundCOlor: "#3c0a6b" },
                    headerTintColor: "white",
                    tabBarActiveTintColor:"#3c0a6b"
                }}
            >
                <BottomTab.Screen
                    name='Welcome'
                    component={WelcomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons color={color} size={size} name='home' />
                        )
                    }}
                />
                <BottomTab.Screen
                    name='user'
                    component={UserScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons color={color} size={size} name='person' />
                        )
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})