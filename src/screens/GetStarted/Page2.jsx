import React from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Page2 = ()=>{

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.controlContainer}>
              <TouchableOpacity
               
                onPress={()=>navigation.navigate("Page1")} 
                >
                 <Ionicons name="chevron-back-outline" size={54} color="black" />
              </TouchableOpacity> 
              <TouchableOpacity
                 onPress={()=>navigation.navigate("Page3")} 
              >
                <Ionicons name="chevron-forward" size={54} color="black" />
              </TouchableOpacity>
              
            </View>
             <Text style={styles.text}>
                Page 2 Screen
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

export default Page2;
