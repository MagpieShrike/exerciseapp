import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';

function ResourcesScreen() {

    return(
        <SafeAreaView style={styles.container}>
            <BackgroundImage source={require('./727.jpg')} style={styles.image}>
                <Card>
                    <View style={ styles.strip }></View>
                    <View style={{ paddingHorizontal: 90, paddingBottom: 30 }}>
                        <Card.Title style={styles.title}>Resources</Card.Title>
                        <Card.Divider />
                    </View>
                    <View style ={{ paddingHorizontal: 30, }}>
                        <Text> Content </Text>
                    </View>
                </Card>
            </BackgroundImage>
        </SafeAreaView>
    );
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

export default ResourcesScreen;