import React from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Page1 = ()=>{

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.controlContainer}>
              <TouchableOpacity
                >
               
              </TouchableOpacity> 
              <TouchableOpacity
                 onPress={()=>navigation.navigate("Page2")} 
              >
                <Ionicons name="chevron-forward" size={54} color="black" />
              </TouchableOpacity>
              
            </View>
             <Text style={styles.text}>
                Page 1 Screens
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
    controlContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text:{
        textAlign:"center"
    }

})

export default Page1;
