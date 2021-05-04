import React, { useState, useRef } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

const PASSWORD = "Ch@rge!";

function LoginApp() {
    let [login, setLogin] = useState({
        loggedIn: false
    });
    let [username, setUsername] = useState({
        username: ""
    });
    let [valid, setValid] = useState({
        password: null,
    })

    const passRef = useRef(null);
    const userRef = useRef(null);

    let doLogin = () => {
        if (passRef.current.value == PASSWORD) {
            setLogin({ loggedIn: true });
            setUsername({ username: userRef.current.value });
        } else {
            setValid({ password: false });
        }

    }


    return (
        <View>
            {
                login.loggedIn == true
                    ? <Text>Welcome, {username.username}! </Text>
                    : <View>
                        <Text>Welcome, please log in below!</Text>
                        <br />
                        <Text style={styles.label}> Username </Text>
                        <TextInput
                            style={styles.textInput}
                            ref={userRef}>
                        </TextInput>
                        <Text style={styles.label}> Password </Text>
                        <TextInput
                            style={styles.textInput}
                            ref={passRef}>
                        </TextInput>
                        {valid.password != null ? <Text style={styles.errorMessage}>Wrong password! Try again.</Text> : undefined}
                        <br />
                        <Button onPress={doLogin} title="Login"></Button>
                    </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        height: 30,
        marginTop: 12,
        marginLeft: 12,
        marginRight: 12,
        fontSize: "1rem"
    },
    textInput: {
        height: 40,
        marginBottom: 12,
        marginLeft: 12,
        marginRight: 12,
        border: "1px solid black"
    },
    invalidInput: {
        border: "3px solid red",
    },
    errorMessage: {
        height: 15,
        marginLeft: 12,
        color: "red",
        fontSize: ".75rem"
    }
});

export default LoginApp;