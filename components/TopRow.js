import * as React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.props.home} style={styles.button}>
                    <Image source={{ uri: "https://icon-library.net/images/home-icon-png-transparent/home-icon-png-transparent-17.jpg" }} style={{ width: 50, height: 50 }} />
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.logout} style={styles.button}>
                    <Image source={{ uri: "https://cdn2.iconfinder.com/data/icons/android-12/512/logout_signout-512.png" }} style={{ width: 50, height: 50 }} />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'space-between'
    },
    button: {
        width: 70,
        height: 50
    }
});