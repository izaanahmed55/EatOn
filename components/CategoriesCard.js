import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoriesCard = (props) => {
    return (
        <TouchableOpacity className="relative mr-4">
            <View className="w-24 h-24 flex items-center justify-center mx-auto rounded-lg">
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
                    className="rounded-lg"
                />
            </View>

            <Text>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default CategoriesCard;
