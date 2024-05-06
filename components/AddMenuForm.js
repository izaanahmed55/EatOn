import { useNavigation } from "@react-navigation/native";
import { createRef, useEffect, useState } from "react";
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
} from "react-native-popup-menu";
import { fetchRestaurants, insertMenu } from "../api/api";
import DropDownPicker from "react-native-dropdown-picker";
import Toast from "react-native-toast-message";

const AddMenuForm = () => {
   const navigation = useNavigation();
   const [menuItem, setMenuItem] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [restaurantId, setRestaurantId] = useState(null);
   const [restName, setRestName] = useState("Restaurant");

   const [restaurants, setRestaurants] = useState([]);

   useEffect(() => {
      fetchRestaurants()
         .then((restaurants) => {
            console.log(restaurants);
            setRestaurants(restaurants);
         })
         .catch((error) => {
            setError(error);
         });
   }, []);

   const InputRef = createRef();

   const resetForm = () => {
      setMenuItem("");
      setDescription("");
      setPrice("");
      setRestaurantId(null);
   };

   const handleSubmitPress = async () => {
      try {
         if (!menuItem || !description || !price || !restaurantId) {
            console.error("All fields are required");
            return;
         }

         const body = {
            restaurant_id: restaurantId,
            name: menuItem,
            description: description,
            price: price,
         };

         const response = await insertMenu(body);
         if (response) {
            Toast.show({
               type: "success",
               text1: "Menu Added👋",
               text2: "Successfully",
            });
            resetForm();
         }

         resetForm();
      } catch (error) {
         Toast.show({
            type: "error",
            text1: "Something went wrong 🥲",
            text2: "Please try again later!",
         });
         console.error("Error adding menu:", error);
      }
   };

   return (
      <SafeAreaView>
         <View className="bg-white">
            <View className=" p-4 space-y-3 mt-20 flex flex-col mb-16 items-center">
               <Text className="font-bold">Add A Menu</Text>
               <Text>Menu Item</Text>
               <TextInput
                  onChangeText={(menuItem) => setMenuItem(menuItem)}
                  className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                  placeholder="Enter Menu Item Name"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  keyboardType="menu-item-name"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                     InputRef.current && InputRef.current.focus()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
               />
               <Text>Description</Text>
               <TextInput
                  onChangeText={(description) => setDescription(description)}
                  className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                  placeholder="Enter Description"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  keyboardType="description"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                     InputRef.current && InputRef.current.focus()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
               />
               <Text>Price</Text>
               <TextInput
                  onChangeText={(price) => setPrice(price)}
                  className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                  placeholder="Enter Price"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  keyboardType="price"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                     InputRef.current && InputRef.current.focus()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
               />
               <Menu className="mr-4">
                  <MenuTrigger text="Select Restaurant Id" />
                  <MenuOptions>
                     {restaurants &&
                        restaurants.length > 0 &&
                        restaurants.map((res, index) => {
                           return (
                              <MenuOption
                                 key={index}
                                 onSelect={() => {
                                    setRestaurantId(res.restaurant_id);
                                    setRestName(res.name);
                                 }}
                                 text={res.name}
                              />
                           );
                        })}
                  </MenuOptions>
               </Menu>

               <TextInput
                  value={restName}
                  className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                  placeholder="Enter Description"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  keyboardType="description"
                  returnKeyType="next"
                  underlineColorAndroid="#f000"
               />

               {/* <Text>
                  Restaurant :{" "}
                  {restaurantId !== null ? restaurantId : "Select One Please"}
               </Text> */}
               <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={handleSubmitPress}
               >
                  <Text className="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 font-medium rounded-full text-sm px-3 py-4 shadow  w-80 text-center">
                     SUBMIT
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </SafeAreaView>
   );
};

export default AddMenuForm;
