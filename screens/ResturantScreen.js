import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StarIcon } from "react-native-heroicons/solid";
import { dishes } from "../CONSTANTS";
import Dishes from "../components/Dishes";

const ResturantScreen = () => {
    const { params } = useRoute();
    const [resturant, setResturant] = useState(params.data);
    const [dishesData, setDishes] = useState(dishes[`${params.data.title}`]);

    const [totalItems, settotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <ScrollView>
            <View>
                <Image
                    source={{
                        uri: resturant.imgUrl,
                    }}
                    className="w-full h-72 bg-gray-200 p-4"
                    resizeMode="cover"
                />
            </View>

            <View className="p-3">
                <Text className="text-3xl font-bold">{resturant.title}</Text>
                <Text className="text-md text-gray-700 font-semibold">
                    {resturant.description}
                </Text>

                <View className="flex-row space-x-1 items-center my-2 ">
                    <StarIcon color="#FFB100" size={20} />
                    <Text>{resturant.rating}</Text>
                </View>
            </View>
            {/* 
            <Text>{totalItems}</Text>
            <Text>{totalPrice}</Text> */}
            <View className="p-3">
                {dishesData.map((dish, index) => {
                    return (
                        <Dishes
                            dish={dish}
                            key={index}
                            totalPrice={totalPrice}
                            setTotalPrice={setTotalPrice}
                            totalItems={totalItems}
                            settotalItems={settotalItems}
                        />
                    );
                })}
            </View>

            {totalItems > 0 && (
                <Text
                    className="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 font-medium rounded-full text-sm px-3 py-4 shadow  w-96 text-center mx-auto mb-10"
                    onPress={() => {
                        navigation.navigate("checkout", {
                            totalItems: totalItems,
                            totalPrice: totalPrice,
                        });
                    }}
                >
                    CheckOut
                </Text>
            )}
        </ScrollView>
    );
};

export default ResturantScreen;
