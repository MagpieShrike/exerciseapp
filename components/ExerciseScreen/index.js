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

    const renderItem = ({ ...data }) => {
        return ( 
            <View style={{ paddingBottom: 20}}>
                <Text style={ styles.stepTitle }>Step {data.item.key}</Text>
                <Text style={{ textAlign: "justify" }}>{data.item.step}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <BackgroundImage source={require('./727.jpg')} style={styles.image}>
                <View>
                <Card >
                <View style={ styles.strip }></View>
                    <View style={{ paddingHorizontal: 90, paddingBottom: 30 }}>
                        <Card.Title style={styles.title}>{ item.name }</Card.Title>
                        <Card.Divider />
                    </View>
                    <View style ={{ paddingHorizontal: 30, }}>
                        <FlatList data={item.instructions} renderItem={renderItem} />
                    </View>
                </Card>
                </View>
                <View style={styles.bottom}>
                    <Button 
                        buttonStyle={{ backgroundColor: "#081431", width: 450, paddingHorizontal: 10, paddingVertical:10 }}
                        titleStyle={{ color: "#41e8e2", fontWeight: "bold" }}
                        title={`Next Exercise: ${items[nextItem].name}`} 
                        onPress={() => navigation.push('Exercise', { item: items[nextItem], items: items })}
                    />
                </View>
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
        paddingTop: 30,
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
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        zIndex: 10
    },
    stepTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5,
        color: "#081431"
    }
  });

export default ListScreen;