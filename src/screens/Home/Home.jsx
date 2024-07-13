import React from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native";
import Input from "./Header/Input";

const Home = ()=>{

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Input Text={"search..."} bdColor='#E4E4E4'  />
             <Text style={styles.text}>
                Home
             </Text>
        </View>
    )
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
   
    },
    text:{
        textAlign:"center"
    }

})

export default Home;
