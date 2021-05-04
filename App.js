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

import CollectionScreen from './components/CollectionScreen';
import ListScreen from './components/ListScreen';
import ExerciseScreen from './components/ExerciseScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Collection" >
        <Stack.Screen name="Collections" component={ CollectionScreen } />
        <Stack.Screen name="List" component={ ListScreen } options={({ route }) => ({ title: route.params.item.name })}/>
        <Stack.Screen name="Exercise" component={ ExerciseScreen } options={({ route }) => ({ title: route.params.item.name })} />
      </Stack.Navigator>
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
