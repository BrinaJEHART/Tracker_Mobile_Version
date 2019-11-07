import React, { Component } from 'react';
import {
    AsyncStorage,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    ImageBackground,
    Alert
} from 'react-native';
import Methods from './../Api/Methods';

export default class Login extends Component {
    constructor(props) {
        super(props);
        state = {
            amount: '',
        }
    }

    cInvoice = async () => {
        let { amount } = this.state;
        let token = await AsyncStorage.getItem('token');
        let result = await Methods.createInvoice(token, amount);
        console.log(result);
    }

    render() {
        return (
            <ImageBackground source={{ uri: "https://live.staticflickr.com/1890/44299265912_eb6819d65c_b.jpg" }} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{ uri: 'http://simpleicon.com/wp-content/uploads/dollar-256x256.png' }} />
                        <TextInput style={styles.inputs}
                            placeholder="Amount"
                            underlineColorAndroid='transparent'
                            onChangeText={(amount) => this.setState({ amount })} />
                    </View>

                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.cInvoice}>
                        <Text style={styles.loginText}>{"Create Invoice"}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonContainer} onPress={this.props.invoices}>
                        <Text>{"Cancel"}</Text>
                    </TouchableHighlight>

                </View>
            </ImageBackground>

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