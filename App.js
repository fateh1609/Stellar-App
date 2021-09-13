import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen';
import SpaceCraftScreen from './screens/SpaeCraft';
import StarMapScreen from './screens/StarMap';
import DailyPics from './screens/DailyPics';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StarMapScreen from './screens/StarMap';
import DailyPics from './screens/DailyPics';
const Stack=createStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='Home'screenOptions={{
       HeaderShown:false
     }}>
       <Stack.Screen name='Home' component={HomeScreen}/>
       <Stack.Screen name='SpaceCraft' component={SpaceCraftScreen}/>
       <Stack.Screen name='DailyPics' component={DailyPics}/>
       <Stack.Screen name='StarMap' component={StarMapScreen}/>
     </Stack.Navigator>
   </NavigationContainer> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
