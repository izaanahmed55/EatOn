import { useNavigation } from "@react-navigation/native";
import { createRef, useState } from "react";
import {
   Keyboard,
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
import { insertUser } from "../api/api";
import Toast from "react-native-toast-message";

const AddUserForm = () => {
   const navigation = useNavigation();
   const [userName, setUserName] = useState("");
   const [userEmail, setUserEmail] = useState("");
   const [userPassword, setUserPassword] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [userType, setUserType] = useState("");
   const [loading, setLoading] = useState(false);
   const [errortext, setErrortext] = useState("");

   // useLayoutEffect(() => {
   //     navigation.setOptions({
   //         headerShown: false,
   //     });
   // }, []);

   const InputRef = createRef();

   const resetForm = () => {
      setUserName("");
      setUserEmail("");
      setUserPassword("");
      setPhoneNumber("");
      setUserType("");
   };

   const handleSubmitPress = async () => {
      try {
         if (
            !userName ||
            !userEmail ||
            !userPassword ||
            !phoneNumber ||
            !userType
         ) {
            console.error("All fields are required");
            return;
         }

         const body = {
            username: userName,
            email: userEmail,
            password: userPassword,
            phone_number: phoneNumber,
            user_type: userType,
         };

         const response = await insertUser(body);
         if (response) {
            Toast.show({
               type: "success",
               text1: "User Added👋",
               text2: "Successfully",
            });

            resetForm();
         }

         console.log("User inserted successfully:", response);
      } catch (error) {
         Toast.show({
            type: "error",
            text1: "Something Bad Happened 🥲",
            text2: "Sorry!",
         });

         console.error("Error inserting user:", error);
      }
   };
   return (
      <SafeAreaView>
         <View className="bg-white">
            <View className="border p-4 space-y-3 mt-20 flex flex-col mb-16 items-center">
               <Text className="font-bold">Add A User</Text>
               <Text>UserName</Text>
               <TextInput
                  value={userName}
                  onChangeText={(userName) => setUserName(userName)}
                  className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                  placeholder="Enter Username"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  keyboardType="username"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                     InputRef.current && InputRef.current.focus()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
               />
               <Text>Email</Text>
               <TextInput
                  value={userEmail}
                  onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                  className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                  placeholder="Enter Email"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                     InputRef.current && InputRef.current.focus()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
               />
               <Text>Password</Text>
               <TextInput
                  value={userPassword}
                  onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                  className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                  placeholder="Enter Password"
                  placeholderTextColor="#8b9cb5"
                  keyboardType="password"
                  ref={InputRef}
                  onSubmitEditing={Keyboard.dismiss}
                  blurOnSubmit={false}
                  secureTextEntry={true}
                  underlineColorAndroid="#f000"
                  returnKeyType="next"
               />
               <Text>Phone Number</Text>
               <TextInput
                  value={phoneNumber}
                  onChangeText={(PhoneNumber) => setPhoneNumber(PhoneNumber)}
                  className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                  placeholder="Enter Phone Number"
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  keyboardType="phone-number"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                     InputRef.current && InputRef.current.focus()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
               />
               <Menu className="mr-4">
                  <MenuTrigger text="Choose Customer Type" />
                  <MenuOptions value={userType}>
                     <MenuOption
                        onSelect={() => setUserType("Customer")}
                        text="Customer"
                     />
                     <MenuOption
                        onSelect={() => setUserType("Restaurant Owner")}
                        text="Restaurant Owner"
                     />
                     <MenuOption
                        onSelect={() => setUserType("Rider")}
                        text="Rider"
                     />
                  </MenuOptions>
               </Menu>
               <Text>
                  UserType: {userType ? userType : "Select One Please"}
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

export default AddUserForm;
