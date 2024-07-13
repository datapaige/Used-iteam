import React from "react"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome6 } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import Home from "./Home/Home";
import Chats from "./Chats/Chats";
import Post from "./Post/Post";
import MyListings from "./MyListings/MyListings";
import Account from "./Account/Account";
import SearchBarTab from "./SearchBarTab";







const Tab = createMaterialBottomTabNavigator();

<SearchBarTab />


const ScreenBottomTabs=()=>{
  return (
    
    
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'white' }}
    >

      <Tab.Screen
        name="H2"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
            
          ),
        }}
      />
      <Tab.Screen
        name="H3"
        component={Chats}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="H4"
        component={Post}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle-outline" size={24} color="black" />
          ),
        }}
      />
<Tab.Screen
        name="H5"
        component={MyListings}
        options={{
          tabBarLabel: 'MyListings',
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="bars-progress" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="H6"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />
          ),
        }}
      />

    </Tab.Navigator>
    
  );
}


export default ScreenBottomTabs;