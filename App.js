import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from "./src/screens/GetStarted/Page1";
import Page2 from "./src/screens/GetStarted/Page2";
import Page3 from "./src/screens/GetStarted/Page3";
import SearchBarTab from "./src/screens/SearchBarTab";
import ScreenBottomTabs from "./src/screens/ScreenBottomTab";
const Stack = createNativeStackNavigator();


const App = () =>{



  return(

    
    <NavigationContainer>

      <Stack.Navigator  initialRouteName="Page1" screenOptions={{headerShown:false}} >
        <Stack.Screen  name="Page1" component={Page1} />
        <Stack.Screen  name="Page2" component={Page2} />
        <Stack.Screen  name="Page3" component={Page3} />
        <Stack.Screen  name="ScreenBottomTabs" component={ScreenBottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>

    
  )

}


export default App;