import { useNavigation, useRoute } from "@react-navigation/native";
import { createRef, useLayoutEffect, useState } from "react";
import {
    Image,
    Keyboard,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { logo } from "../CONSTANTS";
import CONSTANTS from "../CONSTANTS";
import { ShoppingBagIcon } from "react-native-heroicons/solid";
// import logo from "../assets/eaton-1.png";
export default function CheckOut() {
    const { params } = useRoute();
    const navigation = useNavigation();
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [area, setArea] = useState("");
    const [cardInformation, setCardInformation] = useState("");
    const [expiration, setExpiration] = useState("");
    const [errortext, setErrortext] = useState("");
    const [loading, setLoading] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const passwordInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext("");
        if (!userEmail) {
            alert("Please Enter Email");
            return;
        }
        if (!userName) {
            alert("Please Enter Name");
            return;
        }
        if (!shippingAddress) {
            alert("Please Enter shipping Address");
            return;
        }
        if (!area) {
            alert("Please Enter area");
            return;
        }

        if (!cardInformation) {
            alert("Please Enter Card Details");
            return;
        }
        if (!expiration) {
            alert("Please Enter Card Details");
            return;
        }
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            navigation.replace("home");
        }, 3000);
    };

    return (
        <SafeAreaView style={CONSTANTS.AndroidSafeArea}>
            <ScrollView>
                <View className="bg-white  pb-20">
                    <View className="flex-row items-center space-x-1 mt-10 justify-center">
                        <Text className="text-2xl ">Checkout </Text>
                        <ShoppingBagIcon color="#263159" size={30} />
                    </View>
                    <View>
                        <View className="space-y-3 mt-20 flex flex-col items-center">
                            <View className="flex-row items-center justify-start w-80">
                                <Text className="text-lg font-bold text-gray-700 ">
                                    Contact information
                                </Text>
                            </View>

                            <TextInput
                                onChangeText={(UserEmail) =>
                                    setUserEmail(UserEmail)
                                }
                                className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-sm"
                                placeholder="Enter Email"
                                placeholderTextColor="#8b9cb5"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                returnKeyType="next"
                                underlineColorAndroid="#f000"
                                blurOnSubmit={false}
                            />
                            <TextInput
                                onChangeText={(userName) =>
                                    setUserName(userName)
                                }
                                className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-sm"
                                placeholder="Enter Full Name"
                                placeholderTextColor="#8b9cb5"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                returnKeyType="next"
                                underlineColorAndroid="#f000"
                                blurOnSubmit={false}
                            />
                            <View className="flex-row items-center justify-start w-80 pt-10">
                                <Text className="text-lg font-bold text-gray-700 ">
                                    Shipping
                                </Text>
                            </View>

                            <TextInput
                                onChangeText={(shippingAddress) =>
                                    setShippingAddress(shippingAddress)
                                }
                                className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-sm"
                                placeholder="Shipping address"
                                placeholderTextColor="#8b9cb5"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                returnKeyType="next"
                                underlineColorAndroid="#f000"
                                blurOnSubmit={false}
                            />
                            <TextInput
                                onChangeText={(area) => setArea(area)}
                                className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-sm"
                                placeholder="Shipping Area"
                                placeholderTextColor="#8b9cb5"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                returnKeyType="next"
                                underlineColorAndroid="#f000"
                                blurOnSubmit={false}
                            />
                            <View className="flex-row items-center justify-start w-80 pt-10">
                                <Text className="text-lg font-bold text-gray-700 ">
                                    Payment
                                </Text>
                            </View>

                            <TextInput
                                onChangeText={(cardInformation) =>
                                    setCardInformation(cardInformation)
                                }
                                className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-sm"
                                placeholder="Card Number 4242 4242 4242 4242"
                                placeholderTextColor="#8b9cb5"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                returnKeyType="next"
                                underlineColorAndroid="#f000"
                                blurOnSubmit={false}
                            />
                            <TextInput
                                onChangeText={(expiration) =>
                                    setExpiration(expiration)
                                }
                                className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-sm"
                                placeholder="Expiration Date"
                                placeholderTextColor="#8b9cb5"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                returnKeyType="next"
                                underlineColorAndroid="#f000"
                                blurOnSubmit={false}
                            />
                            {errortext != "" ? (
                                <Text style={styles.errorTextStyle}>
                                    {errortext}
                                </Text>
                            ) : null}

                            <View className="w-80 shadow-lg rounded-sm p-3 bg-gray-50">
                                <View className="flex-row items-center justify-between">
                                    <Text className="text-base font-semibold text-gray-600">
                                        Total Items:{" "}
                                    </Text>
                                    <Text className="text-base font-bold text-gray-700">
                                        {params.totalItems}
                                    </Text>
                                </View>
                                <View className="flex-row items-center justify-between">
                                    <Text className="text-base font-semibold text-gray-600">
                                        Total Price:{" "}
                                    </Text>
                                    <Text className="text-base font-bold text-gray-700">
                                        {params.totalPrice}
                                    </Text>
                                </View>
                            </View>

                            {loading && (
                                <View className="p-4 w-80 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800">
                                    <Text className="font-medium">
                                        Order Place Successfully 🎉
                                    </Text>
                                </View>
                            )}
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={handleSubmitPress}
                            >
                                <Text className="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 font-medium rounded-sm text-sm px-3 py-4 shadow  w-80 text-center ">
                                    Place Order
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
