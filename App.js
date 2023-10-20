import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Button } from "react-native";
import CategoriesScreen from "./screens/CategoryScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GeniusKnowledgesOverviewScreen from "./screens/GeniusKnowledgesOverviewScreen";

const Stack = createNativeStackNavigator();

import DetailScreen from "./screens/DetailScreen";

import AboutScreen from "./screens/AboutScreen";

import { BackHandler } from "react-native";

import { useNavigation } from '@react-navigation/native';

import { Alert } from "react-native";

//
import * as React from 'react';
import { GeniusKnowledges } from "./data/GeniusKnowledge-data";
//

export default function App() {

  function handleExitButtonClick ()  {
    BackHandler.exitApp(); // Exit the app when the button is clicked
  };

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#1d3557" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#1d3557" },
          }}
        >
          <Stack.Screen
            name="GeniusKnowledgesCategories"
            component={CategoriesScreen}
            options={{ 
              title: "All Categories", //หมวดหมู่
              headerTitleAlign: 'center',

              headerRight: () => (
                <Button
                  onPress={(handleExitButtonClick)}
                  title="Exit"
                  color="#457b9d"
                  
                />),

                headerLeft: () => 
                  <Button
                  title="Dev"
                  color="#457b9d"
                  onPress={() =>  Alert.alert("Developer Swit and Team ")  }
                  
                  //onPress={() =>  Alert.alert("Swit Pothinimitr \n 6414110007")  } 
                  />,
                
            }}

          />
          <Stack.Screen name="GeniusKnowledgesOverview" component={GeniusKnowledgesOverviewScreen}/>
          <Stack.Screen name="Details" component={DetailScreen} />
          <Stack.Screen name="AboutScreen" component={AboutScreen} />



          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  center : {
    alignItems:'center'
  },
});
