import { useNavigation } from "@react-navigation/native";
import { createRef, useState } from "react";
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
import { insertRestaurant } from "../api/api";
import Toast from "react-native-toast-message";

const AddRestaurantForm = () => {
   const navigation = useNavigation();
   const [name, setName] = useState("");
   const [address, setAddress] = useState("");
   const [cuisine_Type, setcuisine_Type] = useState("");
   const [rating, setRating] = useState("");
   const [owner_Id, setOwnerId] = useState(null);

   const InputRef = createRef();

   const resetForm = () => {
      setName("");
      setAddress("");
      setcuisine_Type("");
      setRating("");
      setOwnerId("");
   };

   const handleSubmitPress = async () => {
      try {
         if (!name || !address || !cuisine_Type || !rating || !owner_Id) {
            console.error("All fields are required");
            return;
         }

         const body = {
            name,
            address,
            cuisine_type: cuisine_Type,
            rating,
            owner_id: owner_Id,
         };

         console.log("Request Body:", body);

         const response = await insertRestaurant(body);
         if (response) {
            Toast.show({
               type: "success",
               text1: "Resturant Added👋",
               text2: "Successfully",
            });

            resetForm();
         }

         console.log("Restaurant inserted successfully:", response);
      } catch (error) {
         Toast.show({
            type: "error",
            text1: "Something Bad Happened 🥲",
            text2: "Sorry!",
         });

         console.error("Error inserting restaurant:", error);
      }
   };

   return (
      <SafeAreaView>
         <View className="bg-white">
            <View className="border p-4 space-y-3 mt-20 flex flex-col mb-16 items-center">
               <Text className="font-bold">Add A User</Text>
               <Text>Restaurant Name</Text>
               <TextInput
                  onChangeText={(name) => setName(name)}
                  className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                  placeholder="Enter Restaurant Name"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  keyboardType="restaurant-name"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                     InputRef.current && InputRef.current.focus()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
               />
               <Text>Address</Text>
               <TextInput
                  onChangeText={(address) => setAddress(address)}
                  className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                  placeholder="Enter Address"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  keyboardType="address"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                     InputRef.current && InputRef.current.focus()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
               />
               <Menu className="mr-4">
                  <MenuTrigger text="Choose Cuisine Type" />
                  <MenuOptions>
                     <MenuOption
                        onSelect={() => setcuisine_Type("Italian")}
                        text="Italian"
                     />
                     <MenuOption
                        onSelect={() => setcuisine_Type("Chinese")}
                        text="Chinese"
                     />
                     <MenuOption
                        onSelect={() => setcuisine_Type("Asian")}
                        text="Asian"
                     />
                     <MenuOption
                        onSelect={() => setcuisine_Type("Pakistani")}
                        text="Pakistani"
                     />
                     <MenuOption
                        onSelect={() => setcuisine_Type("Turkish")}
                        text="Turkish"
                     />
                  </MenuOptions>
               </Menu>
               <Text>
                  Cuisine Type:{" "}
                  {cuisine_Type ? cuisine_Type : "Select One Please"}
               </Text>
               <Text>-----------------</Text>
               <Text>Phone Number</Text>
               <TextInput
                  onChangeText={(rating) => setRating(rating)}
                  className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                  placeholder="Enter Rating -  .g. 4.50"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  keyboardType="rating"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                     InputRef.current && InputRef.current.focus()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
               />
               <Menu className="mr-4">
                  <MenuTrigger text="Choose Owner Id" />
                  <MenuOptions>
                     <MenuOption onSelect={() => setOwnerId(1)} text="1" />
                     <MenuOption onSelect={() => setOwnerId(2)} text="2" />
                     <MenuOption onSelect={() => setOwnerId(3)} text="3" />
                  </MenuOptions>
               </Menu>
               <Text>
                  Owner Id: {owner_Id !== null ? owner_Id : "Select One Please"}
               </Text>
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

export default AddRestaurantForm;
