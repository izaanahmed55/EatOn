import { View, Text, ScrollView } from "react-native";
import React from "react";
// import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantFoodCards from "./ResturantFoodCards";

const FeaturedRow = (props) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-2xl text-gray-800 mb-1">
                    {props.title}
                </Text>
                {/* <ArrowRightIcon color="#00ccbb" /> */}
            </View>

            <Text className="text-base text-gray-800 px-4">
                {props.description}
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                className="pt-4 "
            >
                {/* Resturant Food Cards */}
                {props?.resturants?.map((res, index) => {
                    return (
                        <ResturantFoodCards
                            imgUrl="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
                            key={index}
                            title={res.name}
                            address={res.address}
                            cuisine_type={res.cuisine_type}
                            rating={res.rating}
                        />
                    );
                })}
                {props?.menuItems?.map((res, index) => {
                    return (
                        <ResturantFoodCards
                            imgUrl="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                            key={index}
                            title={res.name}
                            address={res.address}
                            cuisine_type={res.cuisine_type}
                            price={res.price}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;
