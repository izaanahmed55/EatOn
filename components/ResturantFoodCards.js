import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Modal,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { fetchMenuById, fetchRestaurantById } from "../api/api";

const ResturantFoodCards = (props) => {

    const [restaurant, setRestaurant] = useState(null)
    const [menu, setMenu] = useState(null)
    const [modal, setModal] = useState(false)
    const [menuModal, setMenuModal] = useState(false)

    const handleViewClick = async (id) => {
        try {
            const restaurantData = await fetchRestaurantById(id);
            setModal(true)
            setRestaurant(restaurantData.restaurant)
        } catch (error) {
            console.error("Error fetching restaurant:", error); 
        }
    };

    const handleViewClickForMenu = async (id) => {
        try {
            const menuData = await fetchMenuById(id);
            setMenuModal(true)
            setMenu(menuData)
        } catch (error) {
            console.error("Error fetching restaurant:", error); 
        }
    };
     

    return (
        <TouchableOpacity className="bg-gray-50 mr-4">
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
                    {props.address}
                </Text>
                <Text className="text-sm  text-gray-600 mb-2">
                    {props.cuisine_type}
                </Text>

                {props.price && <View className="flex-row space-x-1 items-center ">
                    <Text>$ {props.price}</Text>
                </View>}

                {props.rating && <View className="flex-row space-x-1 items-center ">
                    <StarIcon color="#FFB100" size={20} />
                    <Text>{props.rating}</Text>
                </View>}
                
                {props.resturantId && <View className="flex-row space-x-1 items-center ">
                <Text className="bg-red-600 border rounded-full p-2 text-white text-center my-3" onPress={() => handleViewClick(props?.resturantId)}>View</Text>
                </View>}
                
                {props.menuId && <View className="flex-row space-x-1 items-center ">
                <Text className="bg-red-600 border rounded-full p-2 text-white text-center my-3" onPress={() => handleViewClickForMenu(props?.menuId)}>View</Text>
                </View>}

                {modal === true ? (
                    <View className="mt-52" style={{ flex: 1 }}>
                        <Modal isVisible={modal}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image 
                                    source={{ uri: "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" }}
                                    className="w-full h-1/2"
                                />

                                <View className="p-8 w-full ">
                                    <Text className="text-black font-bold text-xl">About {restaurant?.name}</Text>
                                    <Text className="text-black text-lg">Address: {restaurant?.address}</Text>
                                    <Text className="text-black text-lg">Cuisine Type: {restaurant?.cuisine_type}</Text>
                                    <Text className="text-black text-lg">Rating: {restaurant?.rating}</Text>

                                    <Text className="bg-red-600 border rounded-full p-2 text-white text-center my-2" onPress={() => setModal(false)}>Close</Text>
                                </View>
                            </View>
                        </Modal>
                    </View>
                ) : null}
                
                {menuModal === true && menu !== null ? (
                    <ScrollView>
                        <View className="mt-52" style={{ flex: 1 }}>
                        <Modal isVisible={modal}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image 
                                    source={{ uri: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" }}
                                    className="w-full h-1/2"
                                />

                                <View className="p-8 w-full ">
                                    <Text className="text-black font-bold text-xl">{menu[0]?.name}</Text>
                                    <Text className="text-black text-lg">Description: {menu[0]?.description}</Text>
                                    <Text className="text-black text-lg">Price: ${menu[0]?.price}</Text>

                                    <Text className="text-black font-bold text-xl">{menu[1]?.name}</Text>
                                    <Text className="text-black text-lg">Description: {menu[1]?.description}</Text>
                                    <Text className="text-black text-lg">Price: ${menu[1]?.price}</Text>

                                    <Text className="bg-red-600 border rounded-full p-2 text-white text-center my-2" onPress={() => setMenuModal(false)}>Close</Text>
                                </View>
                            </View>
                        </Modal>
                        </View>
                    </ScrollView>
                ) : null}



 
            </View>
        </TouchableOpacity>
    );
};

export default ResturantFoodCards;
