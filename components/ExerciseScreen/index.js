/*
       
    EXERCISE SCREEN
        - receives exercise name, description, steps, <-prev, and next-> from ListScreen
        - displays exercise name, description, and steps
        - allows user to go to the previous or next exercise in the exercise list
        - opens TimerDrawer

*/

import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native';
import { Card, Text, Button } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';

function ListScreen({ navigation, route }) {
    const { item, items } = route.params;

    let nextItem = items.findIndex((curItem) => curItem == item);
    nextItem = (nextItem + 1) % items.length;

    return (
        <SafeAreaView style={styles.container}>
            <BackgroundImage source={require('./727.jpg')} style={styles.image}>
                <Card>
                <View style={ styles.strip }></View>
                    <View style={{ paddingHorizontal: 90, paddingBottom: 30 }}>
                        <Card.Title style={styles.title}>{ item.name }</Card.Title>
                        <Card.Divider />
                    </View>
                </Card>
                <Button 
                    style={styles.button}
                    title={`Next Exercise: ${items[nextItem].name}`} 
                    onPress={() => navigation.push('Exercise', { item: items[nextItem], items: items })}
                />
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
    },
    button: {
        position: "absolute",
        bottom: 0
    }
  });

export default ListScreen;