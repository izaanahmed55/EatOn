import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { logo, resturantsData, tastyDiscounts } from "../CONSTANTS";
import CONSTANTS from "../CONSTANTS";
// import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { fetchRestaurants } from "../api/api.js";
import {
   Menu,
   MenuOptions,
   MenuOption,
   MenuTrigger,
} from "react-native-popup-menu";
import Header from "../components/Header.js";
// import logo from "../assets/eaton-1.png";
export default function HomeScreen() {
   const navigation = useNavigation();
   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      });
   }, []);

   const [restaurants, setRestaurants] = useState([]);

   useEffect(() => {
      fetchRestaurants()
         .then((restaurants) => {
            setRestaurants(restaurants);
         })
         .catch((error) => {
            setError(error);
         });
   }, []);

   return (
      <SafeAreaView style={CONSTANTS.AndroidSafeArea} className="bg-white">
         {/* Header */}
         <Header />

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
                    title="Tasty Discounts"
                    description="Exciting Deals from your partners"
                    category="discounts"
                    resturants={tastyDiscounts}
                /> */}
            {/* <FeaturedRow
                    title="Offers Near you"
                    description="Exciting Deals from your partners"
                    category="offers"
                    resturants={resturantsData}
                /> */}
         </ScrollView>
      </SafeAreaView>
   );
}
