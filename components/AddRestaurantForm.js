import { useNavigation } from "@react-navigation/native";
import { createRef,  useState } from "react";
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

const AddRestaurantForm = () => {
    const navigation = useNavigation();
    const [restaurantName, setRestaurantName] = useState("");
    const [address, setAddress] = useState("");
    const [cuisineType, setCuisineType] = useState("");
    const [rating, setRating] = useState("");
    const [ownerId, setOwnerId] = useState(null);

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false,
    //     });
    // }, []);

    const InputRef = createRef();
  return (
    <SafeAreaView>
            <View className="bg-white">
                    <View className="space-y-3 mt-20 flex flex-col my-40 items-center">
                        <Text>Restaurant Name</Text>
                        <TextInput
                            onChangeText={(restaurantName) =>
                                setRestaurantName(restaurantName)
                            }
                            className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                            placeholder="Enter Restaurant Name"
                            placeholderTextColor="#8b9cb5"
                            autoCapitalize="none"
                            keyboardType="restaurant-name"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                InputRef.current &&
                                InputRef.current.focus()
                            }
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
                        />
                        <Text>Address</Text>
                        <TextInput
                            onChangeText={(address) =>
                                setAddress(address)
                            }
                            className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                            placeholder="Enter Address"
                            placeholderTextColor="#8b9cb5"
                            autoCapitalize="none"
                            keyboardType="address"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                InputRef.current &&
                                InputRef.current.focus()
                            }
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
                        />
                        <Menu className="mr-4">
                            <MenuTrigger text='Choose Cuisine Type'/>
                            <MenuOptions>
                                <MenuOption onSelect={() => setCuisineType("Italian")} text='Italian' />
                                <MenuOption onSelect={() => setCuisineType("Chinese")} text='Chinese' />
                                <MenuOption onSelect={() => setCuisineType("Asian")} text='Asian' />
                                <MenuOption onSelect={() => setCuisineType("Pakistani")} text='Pakistani' />
                                <MenuOption onSelect={() => setCuisineType("Turkish")} text='Turkish' />
                            </MenuOptions>
                         </Menu>
                         <Text>Cuisine Type: {cuisineType ? cuisineType : "Select One Please"}</Text>
                        <Text>-----------------</Text>
                        <Text>Phone Number</Text>
                        <TextInput
                            onChangeText={(rating) =>
                                setRating(rating)
                            }
                            className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                            placeholder="Enter Rating - e.g. 4.50"
                            placeholderTextColor="#8b9cb5"
                            autoCapitalize="none"
                            keyboardType="rating"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                InputRef.current &&
                                InputRef.current.focus()
                            }
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
                        />
                        <Menu className="mr-4">
                            <MenuTrigger text='Choose Owner Id'/>
                            <MenuOptions>
                                <MenuOption onSelect={() => setOwnerId(1)} text='1' />
                                <MenuOption onSelect={() => setOwnerId(2)} text='2' />
                                <MenuOption onSelect={() => setOwnerId(3)} text='3' />
                            </MenuOptions>
                         </Menu>
                         <Text>Owner Id: {ownerId !== null ? ownerId : "Select One Please"}</Text>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            // onPress={handleSubmitPress}
                        >
                            <Text className="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 font-medium rounded-full text-sm px-3 py-4 shadow  w-80 text-center">
                                SUBMIT
                            </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </SafeAreaView>
  )
}

export default AddRestaurantForm