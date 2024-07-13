import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import {StyleSheet, view, TextInput, SafeAreaView } from "react-native-paper";





const SearchBarTab = () => {
    return(
        <SafeAreaView style={{flex:1,}}>
            <TextInput placeholder="Search" clearButtonMode="always" marginHorizontal />
        </SafeAreaView>
    )
}



    

export default SearchBarTab;