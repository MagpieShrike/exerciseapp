/*

    NAVIGATOR
      - initially shows login screen
      - once user has logged in, switches to collection screen
      - provides navigation between logged in and collection

*/ 

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CollectionScreen from './components/CollectionScreen';
import ListScreen from './components/ListScreen';
import ExerciseScreen from './components/ExerciseScreen';
import ResourcesScreen from './components/ResourcesScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackScreen() {
  return (
    <Stack.Navigator 
      initialRouteName="Collection" 
      screenOptions={{
        headerStyle: {
          backgroundColor: "#081431",
          shadowColor: 'transparent'
        },
        headerTintColor: "#9dd6f1",
      }}
    >
        <Stack.Screen name="Collections" component={ CollectionScreen } />
        <Stack.Screen name="List" component={ ListScreen } options={({ route }) => ({ title: route.params.item.name })}/>
        <Stack.Screen name="Exercise" component={ ExerciseScreen } options={({ route }) => ({ title: route.params.item.name })} />
      </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Exercises" component={ StackScreen } />
          <Tab.Screen name="Resources" component={ ResourcesScreen } />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
