/*

    LIST SCREEN
        - receives array of exercises from COLLECTION SCREEN
        - renders them individually in a FlatList
        - passes exercise name, description, steps, <-prev, and next-> to ExerciseScreen

*/

import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';

function ListScreen({ navigation, route }) {
    const { items } = route.params;
    const renderItem = ({ ...data }) => {
        return ( 
            <TouchableOpacity onPress={() => navigation.push('Exercise', { item: data.item, items: items })}>
                <Card>
                    <View style={ styles.strip }></View>
                    <View style={{ paddingHorizontal: 90, paddingBottom: 30 }}>
                        <Card.Title style={styles.title}>{ data.item.name }</Card.Title>
                        <Card.Divider />
                    </View>
                </Card>
            </TouchableOpacity>  
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <BackgroundImage source={require('./727.jpg')} style={styles.image}>
                <FlatList data={items} renderItem={renderItem} showsVerticalScrollIndicator="false" />
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

export default ListScreen;