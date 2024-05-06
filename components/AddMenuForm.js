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

const AddMenuForm = () => {
    const navigation = useNavigation();
    const [menuItem, setMenuItem] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [restaurantId, setRestaurantId] = useState(null);

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
                        <Text>Menu Item</Text>
                        <TextInput
                            onChangeText={(menuItem) =>
                                setMenuItem(menuItem)
                            }
                            className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                            placeholder="Enter Menu Item Name"
                            placeholderTextColor="#8b9cb5"
                            autoCapitalize="none"
                            keyboardType="menu-item-name"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                InputRef.current &&
                                InputRef.current.focus()
                            }
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
                        />
                        <Text>Description</Text>
                        <TextInput
                            onChangeText={(description) =>
                                setDescription(description)
                            }
                            className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                            placeholder="Enter Description"
                            placeholderTextColor="#8b9cb5"
                            autoCapitalize="none"
                            keyboardType="description"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                InputRef.current &&
                                InputRef.current.focus()
                            }
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
                        />
                        <Text>Price</Text>
                        <TextInput
                            onChangeText={(price) =>
                                setPrice(price)
                            }
                            className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                            placeholder="Enter Price"
                            placeholderTextColor="#8b9cb5"
                            autoCapitalize="none"
                            keyboardType="price"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                InputRef.current &&
                                InputRef.current.focus()
                            }
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
                        />
                        <Menu className="mr-4">
                            <MenuTrigger text='Select Restaurant Id'/>
                            <MenuOptions>
                                <MenuOption onSelect={() => setRestaurantId(1)} text='1' />
                                <MenuOption onSelect={() => setRestaurantId(2)} text='2' />
                                <MenuOption onSelect={() => setRestaurantId(3)} text='3' />
                                <MenuOption onSelect={() => setRestaurantId(4)} text='4' />
                            </MenuOptions>
                         </Menu>
                         <Text>Restaurant Id: {restaurantId !== null ? restaurantId : "Select One Please"}</Text>
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

export default AddMenuForm