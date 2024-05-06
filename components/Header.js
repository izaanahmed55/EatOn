import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, SafeAreaView, View } from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { logo } from "../CONSTANTS";
import CONSTANTS from "../CONSTANTS";


const Header = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={CONSTANTS.AndroidSafeArea} className="bg-white">
      <View className="flex-row  items-center w-full justify-between">
                <View className="w-32 h-24">
                    <Image
                        source={logo}
                        className="object-cover mx-auto "
                        resizeMode="contain"
                        style={{
                            flex: 1,
                            width: "100%",
                            // height: "100%",
                            resizeMode: "contain",
                        }}
                    />
                </View>
                <Menu className="mr-4">
                    <MenuTrigger text='Menu' />
                    <MenuOptions>
                        <MenuOption onSelect={() => navigation.navigate("home")} text='Home' />
                        <MenuOption onSelect={() => navigation.navigate("add-restaurant")} text='Add Restaurants' />
                        <MenuOption onSelect={() => navigation.navigate("add-user")} text='Add Users' />
                        <MenuOption onSelect={() => navigation.navigate("add-menu")} text='Add Menu' />
                    </MenuOptions>
                </Menu>
                {/* <View className=" flex-1">
                    <Text>Home</Text>
                </View> */}
            </View>
            </SafeAreaView>
  )
}

export default Header