import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { logo, resturantsData, tastyDiscounts } from "../CONSTANTS";
import CONSTANTS from "../CONSTANTS";
// import Categories from "../components/Categories";
// import FeaturedRow from "../components/FeaturedRow";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
// import logo from "../assets/eaton-1.png";
export default function HomeScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView style={CONSTANTS.AndroidSafeArea} className="bg-white">
            {/* Header */}
            <View className="flex-row  items-center w-full justify-between">
                <View className="w-32 h-32  ">
                    <Image
                        source={logo}
                        className="object-cover mx-auto "
                        resizeMode="contain"
                        style={{
                            flex: 1,
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain",
                        }}
                    />
                </View>
                <Menu className="mr-4">
                    <MenuTrigger text='Menu' style={{ fontSize: "18px" }} />
                    <MenuOptions>
                        <MenuOption onSelect={() => navigation.navigate("add-restaurant")} text='Add Restaurants' />
                        {/* <MenuOption onSelect={() => navigation.navigate("view-restaurant")} text='View Restaurants' /> */}
                        <MenuOption onSelect={() => navigation.navigate("add-user")} text='Add Users' />
                        {/* <MenuOption onSelect={() => navigation.navigate("view-user")} text='View Users' /> */}
                        <MenuOption onSelect={() => navigation.navigate("add-menu")} text='Add Menu' />
                        {/* <MenuOption onSelect={() => navigation.navigate("view-menu")} text='View Menu' /> */}
                    </MenuOptions>
                </Menu>
                {/* <View className=" flex-1">
                    <Text>Home</Text>
                </View> */}
            </View>

            {/* Body */}
            {/* <ScrollView> */}
                {/* Categories */}

                {/* <Categories /> */}
                {/* Featured Rows */}
                {/* <FeaturedRow
                    title="Featured"
                    description="Exciting Deals from your partners"
                    category="featured"
                    resturants={resturantsData}
                /> */}
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
            {/* </ScrollView> */}
        </SafeAreaView>
    );
}