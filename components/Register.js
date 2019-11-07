import React, { Component } from 'react';
import {
    StyleSheet,
    AsyncStorage,
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
            fullname: '',
            gmail: '',
            password: ''
        }
    }

    componentWillMount() {
        this.removeToken();
    }

    removeToken = async() => {
        if(await AsyncStorage.getItem('token')) {
            await AsyncStorage.removeItem('token');
        }
    }

    doRegister = async () => {
        let { fullname, gmail, password } = this.state;
        console.log(fullname, gmail, password, "tole pošlje iz register.js");
        let result = await Methods.register(fullname, gmail, password);
        console.log(result);
    }

    render() {
        return (
            <ImageBackground source={{ uri: "https://live.staticflickr.com/1890/44299265912_eb6819d65c_b.jpg" }} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{ uri: 'https://unity3d.com/profiles/unity3d/themes/unity/images/ui/icons/other/user-default128x128.png' }} />
                        <TextInput style={styles.inputs}
                            placeholder="Full name"
                            underlineColorAndroid='transparent'
                            onChangeText={(fullname) => this.setState({ fullname })} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/email-1738468-1475283.png' }} />
                        <TextInput style={styles.inputs}
                            placeholder="Email"
                            keyboardType="email-address"
                            underlineColorAndroid='transparent'
                            onChangeText={(gmail) => this.setState({ gmail })} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/door-key-9-739401.png' }} />
                        <TextInput style={styles.inputs}
                            placeholder="Password"
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            onChangeText={(password) => this.setState({ password })} />
                    </View>

                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.doRegister}>
                        <Text style={styles.loginText}>{"Register"}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.buttonContainer} onPress={this.props.login}>
                        <Text>{"Login"}</Text>
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