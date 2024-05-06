import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
const Dishes = (props) => {
    const [isIcons, setisIcons] = useState(false);
    const [itemsCount, setitemsCount] = useState(0);
    return (
        <TouchableOpacity
            className=" border-b-2 border-b-gray-200 py-3 px-2"
            onPress={() => setisIcons(!isIcons)}
        >
            <View className="flex-row justify-between w-full mb-6 items-center">
                <View className="w-3/5 flex-1">
                    <Text className="text-lg font-semibold text-gray-700">
                        {props.dish.title}
                    </Text>
                    <Text className="text-sm  text-gray-700">
                        {props.dish.desc}
                    </Text>
                    <Text className="text-sm  text-gray-700">
                        <Text className="text-red-600">Rs: </Text>
                        {props.dish.price}
                    </Text>
                </View>
                <View className="w-20 h-20 flex items-center justify-center mx-auto rounded">
                    <Image
                        source={{
                            uri: props.dish.imgUrl,
                        }}
                        style={{
                            flex: 1,
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain",
                        }}
                        className="rounded"
                    />
                </View>
            </View>
            {isIcons && (
                <View>
                    <View className="flex-row items-center space-x-2 pb-2">
                        <TouchableOpacity>
                            <MinusCircleIcon
                                color="#439A97"
                                size={35}
                                onPress={() => {
                                    if (itemsCount > 0) {
                                        setitemsCount(itemsCount - 1);
                                        props.settotalItems(
                                            props.totalItems - 1
                                        );
                                        props.setTotalPrice(
                                            props.totalPrice - props.dish.price
                                        );
                                    }
                                }}
                            />

                            {/* totalPrice={totalPrice}
                            setTotalPrice={setTotalPrice}
                            totalItems={totalItems}
                            settotalItems={setTotalPrice} */}
                        </TouchableOpacity>
                        <Text>{itemsCount}</Text>
                        <TouchableOpacity>
                            <PlusCircleIcon
                                color="#439A97"
                                size={35}
                                onPress={() => {
                                    setitemsCount(itemsCount + 1);
                                    props.settotalItems(props.totalItems + 1);
                                    props.setTotalPrice(
                                        props.totalPrice + props.dish.price
                                    );
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </TouchableOpacity>
    );
};

export default Dishes;
