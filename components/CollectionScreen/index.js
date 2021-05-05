/*

    COLLECTION SCREEN
        - imports an array of exercise collections
        - renders them individually using FlatList
        - passes a list of exercises to ListScreen
        -provides navigation between collection and ListScreen

*/

import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';
import data from './exercises.json'

function CollectionScreen({ navigation, image }) {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.push('List', { item: item, items: item.exercises })} >
                <Card >
                    <View style={ styles.strip }></View>
                    <View style={{ paddingHorizontal: 90, paddingBottom: 30 }}>
                        <Card.Title style={styles.title}>{ item.name }</Card.Title>
                        <Card.Divider />
                        <Text>Exercises: { item.exercises.length }</Text>
                    </View>   
                </Card>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <BackgroundImage source={require('./727.jpg')} style={styles.image}>
                <FlatList data={data} renderItem={renderItem} showsVerticalScrollIndicator="false" />
            </BackgroundImage>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: "center",
        justifyContent: "center",
      },
    strip:{
        backgroundColor: "#41e8e2",
        padding: 3,
        marginHorizontal: 30,
        marginBottom:20
    },
    title: {
        fontSize: 30,
    }
  });

export default CollectionScreen;


  
  
