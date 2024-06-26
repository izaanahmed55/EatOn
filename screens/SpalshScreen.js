import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";

// import AsyncStorage from "@react-native-community/async-storage";
import { logo } from "../CONSTANTS";

const SplashScreen = ({ navigation }) => {
   //State for ActivityIndicator animation
   const [animating, setAnimating] = useState(true);

   const nav = useNavigation();
   useLayoutEffect(() => {
      nav.setOptions({
         headerShown: false,
      });
   }, []);

   useEffect(() => {
      setTimeout(() => {
         setAnimating(false);
         //Check if user_id is set or not
         //If not then send for Authentication
         //else send to Home Screen
         //   AsyncStorage.getItem('user_id').then((value) =>
         //     navigation.replace(
         //       value === null ? 'Auth' : 'DrawerNavigationRoutes'
         //     ),
         //   );

         navigation.replace("login");
      }, 3000);
   }, []);

   return (
      <View style={styles.container}>
         <Image
            source={logo}
            style={{ width: "90%", resizeMode: "contain", margin: 30 }}
         />
         <ActivityIndicator
            animating={animating}
            color="#FFFFFF"
            size="large"
            style={styles.activityIndicator}
         />
      </View>
   );
};

export default SplashScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
   activityIndicator: {
      alignItems: "center",
      height: 80,
   },
});
