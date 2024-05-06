import { useNavigation } from "@react-navigation/native";
import { createRef, useLayoutEffect, useState } from "react";
import {
   Image,
   Keyboard,
   SafeAreaView,
   Text,
   TextInput,
   TouchableOpacity,
   View,
} from "react-native";
import { logo } from "../CONSTANTS";
import CONSTANTS from "../CONSTANTS";
import Toast from "react-native-toast-message";
// import logo from "../assets/eaton-1.png";
export default function Login() {
   const navigation = useNavigation();
   const [userEmail, setUserEmail] = useState("Admin");
   const [userPassword, setUserPassword] = useState("1234");
   const [loading, setLoading] = useState(false);
   const [errortext, setErrortext] = useState("");

   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      });
   }, []);

   const passwordInputRef = createRef();

   const handleSubmitPress = () => {
      setErrortext("");
      if (!userEmail) {
         Toast.show({
            type: "error",
            text1: "Please fill Email",
         });

         //  alert("Please fill Email");
         return;
      }
      if (!userPassword) {
         Toast.show({
            type: "error",
            text1: "Please fill Password",
         });
         //  alert("Please fill Password");
         return;
      }
      setLoading(true);
      Toast.show({
         type: "success",
         text1: "Welcome Back! Happy Eaiting👋",
         text2: "Successfully",
      });

      navigation.replace("home");
   };

   return (
      <SafeAreaView style={CONSTANTS.AndroidSafeArea}>
         <View className="bg-white min-h-full max-h-screen">
            <View className="w-72 h-72 flex items-center justify-center mx-auto">
               <Image
                  source={logo}
                  className="object-cover border-2  mx-auto "
                  resizeMode="contain"
                  style={{
                     flex: 1,
                     width: "100%",
                     height: "100%",
                     resizeMode: "contain",
                  }}
               />
            </View>
            <View>
               <View className="space-y-3 mt-20 flex flex-col items-center">
                  <TextInput
                     onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                     value={userEmail}
                     className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                     placeholder="Enter Email"
                     placeholderTextColor="#8b9cb5"
                     autoCapitalize="none"
                     keyboardType="email-address"
                     returnKeyType="next"
                     onSubmitEditing={() =>
                        passwordInputRef.current &&
                        passwordInputRef.current.focus()
                     }
                     underlineColorAndroid="#f000"
                     blurOnSubmit={false}
                  />
                  <TextInput
                     onChangeText={(UserPassword) =>
                        setUserPassword(UserPassword)
                     }
                     value={userPassword}
                     className="w-80 border-2 border-gray-200 px-3 py-2 mx-auto rounded-full"
                     placeholder="Enter Password"
                     placeholderTextColor="#8b9cb5"
                     keyboardType="default"
                     ref={passwordInputRef}
                     onSubmitEditing={Keyboard.dismiss}
                     blurOnSubmit={false}
                     secureTextEntry={true}
                     underlineColorAndroid="#f000"
                     returnKeyType="next"
                  />
                  {errortext != "" ? (
                     <Text style={styles.errorTextStyle}>{errortext}</Text>
                  ) : null}

                  <TouchableOpacity
                     activeOpacity={0.5}
                     onPress={handleSubmitPress}
                  >
                     <Text className="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 font-medium rounded-full text-sm px-3 py-4 shadow  w-80 text-center">
                        LOGIN
                     </Text>
                  </TouchableOpacity>
                  <Text className="text-lg text-gray-600 mt-8">
                     New Here ?{" "}
                     <Text
                        onPress={() => navigation.navigate("register")}
                        className="text-gray-800 font-bold"
                     >
                        Register
                     </Text>
                  </Text>
               </View>
            </View>
         </View>
      </SafeAreaView>
   );
}
