import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import CONSTANTS from "../CONSTANTS";
import FeaturedRow from "../components/FeaturedRow";
import { fetchRestaurants, fetchMenuItems } from '../api/api.js';
import Header from "../components/Header.js";

export default function HomeScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    const [restaurants, setRestaurants] = useState([]);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetchRestaurants()
          .then(restaurants => {
            setRestaurants(restaurants);
          })
          .catch(error => {
            console.log(error);
          });
          fetchMenuItems()
          .then(menuItems => {
            setMenuItems(menuItems);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
    
    return (
        <>
        <SafeAreaView style={CONSTANTS.AndroidSafeArea} className="bg-white">
            {/* Header */}
            <Header/>

            {/* Body */}
            <ScrollView>
                {/* Categories */}

                {/* <Categories /> */}
                {/* Featured Rows */}
                <FeaturedRow
                    title="Restaurants"
                    description="With Exciting Ambiance"
                    category="featured"
                    resturants={restaurants}
                />
                {/* <FeaturedRow
                    title="Menu Items"
                    description="Exciting Menu Items"
                    category="discounts"
                    menuItems={menuItems}
                /> */}
                {/* <FeaturedRow
                    title="Offers Near you"
                    description="Exciting Deals from your partners"
                    category="offers"
                    resturants={resturantsData}
                /> */}
            </ScrollView>
        </SafeAreaView></>
    );
}