import React from 'react';
import { StyleSheet, SafeAreaView, View, Linking, Button } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';
import * as WebBrowser from 'expo-web-browser';

function ResourcesScreen() {

    _link1 = () => {
        Linking.openURL('https://www.webmd.com/fitness-exercise/features/fitness-beginners-guide#1');
      };
    _link2 = () => {
    Linking.openURL('https://www.akxl.org/bmicalc/');
    };
    _link3 = () => {
    Linking.openURL('https://www.nationaleatingdisorders.org/');
    };
    _link4 = () => {
    Linking.openURL('https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/exercise-and-stress/art-20044469');
    };

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
                        <Text style={styles.sectionTitle}> Starting Out </Text>
                        <Text> Ask your medical doctor about exercises if you have serious health issues.</Text>
                        <Button
                        title="Fitness 101"
                        onPress={this._link1}
                        style={styles.button}
                        />
                        <Text style={styles.sectionTitle}> Health </Text>
                        <Text>A good workout deserves a healthy lifestyle.  If you or someone you know may need guidance,  please contact someone that can help.</Text>
                        <Button
                        title="Diverse BMI Calculator"
                        onPress={this._link2}
                        style={styles.button}
                        />
                        <Button
                        title="Eating Disorders"
                        onPress={this._link3}
                        style={styles.button}
                        />
                        <Button
                        title="Stress Management"
                        onPress={this._link4}
                        style={styles.button}
                        />
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
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5,
        color: "#081431"
    },
    button: {
        marginTop: 10
    }
  });

export default ResourcesScreen;