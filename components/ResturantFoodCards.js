import {
    View,
    Text,
    TouchableOpacityBase,
    TouchableOpacity,
    Image,
} from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const ResturantFoodCards = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            className="bg-gray-50 mr-4"
            onPress={() => {
                navigation.navigate("resturant", { data: props });
            }}
        >
            <View className="w-56 h-40 flex items-center justify-center mx-auto rounded">
                <Image
                    source={{
                        uri: props.imgUrl,
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
            <View className="px-2 py-4">
                <Text className="text-xl font-bold text-gray-800">
                    {props.title}
                </Text>
                <Text className="text-sm  text-gray-600 mb-2">
                    {props.location}
                </Text>

                <View className="flex-row space-x-1 items-center ">
                    <StarIcon color="#FFB100" size={20} />
                    <Text>{props.rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ResturantFoodCards;
