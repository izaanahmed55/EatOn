import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginPage from "./screens/LoginPage";
import SplashScreen from "./screens/SpalshScreen";
import Register from "./screens/Register";
import ResturantScreen from "./screens/ResturantScreen";
import CheckOut from "./screens/CheckOut";
import { MenuProvider } from 'react-native-popup-menu';
import AddUser from "./screens/AddUser";
import ViewUser from "./screens/ViewUser";
import AddRestaurant from "./screens/AddRestaurant";
import ViewRestaurant from "./screens/ViewRestaurant";
import AddMenu from "./screens/AddMenu";
import ViewMenu from "./screens/ViewMenu";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <MenuProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="splash" component={SplashScreen} />
                    <Stack.Screen name="login" component={LoginPage} />
                    <Stack.Screen name="register" component={Register} />
                    <Stack.Screen name="home" component={HomeScreen} />
                    <Stack.Screen name="resturant" component={ResturantScreen} />
                    <Stack.Screen name="checkout" component={CheckOut} />
                    <Stack.Screen name="add-user" component={AddUser} /> 
                    <Stack.Screen name="view-user" component={ViewUser} />
                    <Stack.Screen name="add-restaurant" component={AddRestaurant} />
                    <Stack.Screen name="view-restaurant" component={ViewRestaurant} />
                    <Stack.Screen name="add-menu" component={AddMenu} />
                    <Stack.Screen name="view-menu" component={ViewMenu} />
                </Stack.Navigator>
            </NavigationContainer> 
        </MenuProvider>
    );
}
