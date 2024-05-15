import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import WelcomeScreen from './screens/WelcomeScreen'
import UserScreen from './screens/UserScreen'
import { Ionicons } from '@expo/vector-icons';
const Drawer = createDrawerNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator  >
                <Drawer.Screen name='WelcomeScrren' component={WelcomeScreen} options={{
                    headerStyle: {
                        backgroundColor: "#3c0a8b",
                    },
                    headerTintColor: "white",
                    drawerLabel: "Welcome Screen",
                    drawerActiveBackgroundColor: '#f0e1ff',
                    drawerActiveTintColor: "#3c0a6b",
                    drawerIcon: ({ color, size }) =>
                        (<Ionicons color={color} size={size} name='home' />)
                }} />
                <Drawer.Screen name='User' component={UserScreen} options={{
                    drawerIcon:({color,size})=>(
                        <Ionicons name='person' color={color} size={size}/>
                    )
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})