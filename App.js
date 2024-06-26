import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavourateScreen from './screens/FavourateScreen';
import { Ionicons } from '@expo/vector-icons';
import FavouritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()


function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: "#351401" },
      headerTintColor: "white",
      sceneContainerStyle: { backgroundColor: "#3f2f25" },
      drawerContentStyle: { backgroundColor: "#351402" },
      drawerInactiveTintColor: "white",
      drawerActiveBackgroundColor: "#e4BAA1"
    }}>
      <Drawer.Screen name='MealsCategories' component={CategoriesScreen} options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons color={color} size={size} name='' />
        )
      }} />
      <Drawer.Screen name='Favourate' component={FavourateScreen} />
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#351401'
              }, headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" }
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='MealsOverview'
              component={MealsOverviewScreen}
            />
            <Stack.Screen name='MealDetailsScreen' component={MealDetailsScreen} options={{ title: "About the meal" }} />
          </Stack.Navigator>

        </NavigationContainer>
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
