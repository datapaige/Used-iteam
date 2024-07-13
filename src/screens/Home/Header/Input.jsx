import React,{useState} from 'react';
import { View, StyleSheet, TextInput,Platform, Dimensions } from 'react-native';
import Svg, { Line,Circle,G} from "react-native-svg"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const fontScale = Dimensions.get('window').fontScale;

const Input = ({Text,KBtype,onChangeText,lock,bdColor='grey'}) => {
  
 return (  
     <View style = {{height:Platform.OS === 'ios'?windowHeight * 0.055:windowHeight * 0.055,
     flexDirection:'row',
     alignItems:'center',
     marginTop:Platform.OS === 'ios'?windowHeight * 0.02:windowHeight * 0.02,
     padding:Platform.OS === 'ios'?windowWidth * 0.03:windowWidth * 0.03,
     borderRadius:4,
     borderColor:bdColor,
     backgroundColor:'white',
     width:Platform.OS === 'ios'?windowWidth * 0.90:windowWidth * 0.90,
     marginLeft:Platform.OS === 'ios'?windowWidth * 0.03:windowWidth * 0.03,

     borderWidth:2    }}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="19.811" height="19.811" viewBox="0 0 19.811 19.811">
          <G id="search" transform="translate(-2.25 -2.25)">
          <Circle id="Ellipse_1" data-name="Ellipse 1" cx="8" cy="8" r="8" transform="translate(3 3)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          <Line id="Line_7" data-name="Line 7" x1="4.35" y1="4.35" transform="translate(16.65 16.65)" fill="none" stroke="#707070" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          </G>
        </Svg>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder= {Text}
        placeholderTextColor="#707070"
        //multiline
        keyboardType={KBtype} 
        secureTextEntry={lock}
        autoCompleteType = "off"
       scrollEnabled = {true}
       autoCorrect={false}
     
      />
     </View>  
  
  )
};

const styles = StyleSheet.create({
    container: {
        height:Platform.OS === 'ios'?windowHeight * 0.055:windowHeight * 0.055,
        flexDirection:'row',
        alignItems:'center',
        marginTop:Platform.OS === 'ios'?windowHeight * 0.02:windowHeight * 0.02,
        padding:Platform.OS === 'ios'?windowWidth * 0.03:windowWidth * 0.03,
        borderRadius:5,
        borderColor:'grey',
        backgroundColor:'white',
        width:Platform.OS === 'ios'?windowWidth * 0.96:windowWidth * 0.96,
        borderWidth:2       
      },  
    input: {
    padding: 10,
    borderColor:'grey',
    width:Platform.OS === 'ios'?windowWidth * 0.75:windowWidth * 0.75,
    height:Platform.OS === 'ios'?windowHeight * 0.05:windowHeight * 0.05,
    fontWeight:'500',
    color:'black',
    backgroundColor:"white",
    borderWidth:0,
  },
});

export default Input;