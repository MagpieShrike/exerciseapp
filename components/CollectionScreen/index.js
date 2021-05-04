/*

    COLLECTION SCREEN
        - contains an array of exercise collections
        - renders them individually using FlatList
        - passes a list of exercises to ListScreen
        -provides navigation between collection and ListScreen

*/

import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';

const data = [
    {
        key: "0",
        name: "Abs",
        exercises: [
            {
                key: "0",
                name: "Bird-Dog",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            },
            {
                key: "1",
                name: "Bodyweight Squat",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            }
        ]
    },
    {
        key: "1",
        name: "Arms",
        exercises: [
            {
                key: "0",
                name: "Bent Knee Push-up",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            },
            {
                key: "1",
                name: "Cat-Cow",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            }
        ]
    },
    {
        key: "2",
        name: "Back",
        exercises: [
            {
                key: "0",
                name: "90 Lat Stretch",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            },
            {
                key: "1",
                name: "Bird-Dog",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            },
            {
                key: "2",
                name: "Cat-Cow",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            },
            {
                key: "3",
                name: "Childs Pose",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            },
            {
                key: "4",
                name: "Cobra Exercise",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            }
        ]
    },
    {
        key: "3",
        name: "Chest",
        exercises: [
            {
                key: "0",
                name: "Bent Knee Push-up",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            },
            {
                key: "1",
                name: "Cat-Cow",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            }
        ]
    }

]
// Collection Array End

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
                <FlatList data={data} renderItem={renderItem} />
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


  
  
