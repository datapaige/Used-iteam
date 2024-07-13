import React from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native";

const Chats = ()=>{

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
          
             <Text style={styles.text}>
                Chats
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

export default Chats;
