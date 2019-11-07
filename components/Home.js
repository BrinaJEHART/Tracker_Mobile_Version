import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

export default class Home extends React.Component {
    render() {
        return (
            <ImageBackground source={{ uri: "https://live.staticflickr.com/1890/44299265912_eb6819d65c_b.jpg" }} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>

                    <Text style={{ fontWeight: 'bold' }}>{"Welcome to Tracker!"}</Text>

                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.props.users}>
                        <Text style={styles.loginText}>{"Users"}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.props.invoices}>
                        <Text style={styles.loginText}>{"Invoices"}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonContainer} onPress={this.props.logout}>
                        <Text>{"Logout"}</Text>
                    </TouchableHighlight>

                </View>
            </ImageBackground >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }
});
