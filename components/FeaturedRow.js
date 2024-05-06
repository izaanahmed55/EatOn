import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantFoodCards from "./ResturantFoodCards";
import { resturantsData } from "../CONSTANTS";
const FeaturedRow = (props) => {
  
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-2xl text-gray-800 mb-1">
                    {props.title}
                </Text>
                <ArrowRightIcon color="#00ccbb" />
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
                {props.resturants.map((res) => {
                    return (
                        <ResturantFoodCards
                            key={res.id}
                            imgUrl={res.imgUrl}
                            title={res.title}
                            rating={res.rating}
                            location={res.location}
                            description={res.description}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;
