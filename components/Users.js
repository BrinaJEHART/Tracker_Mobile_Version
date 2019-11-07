import * as React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Header, ListItem, Divider } from 'react-native-elements';
import Constants from 'expo-constants';
import Methods from './../Api/Methods';
import { Container, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import TopRow from './TopRow';

export default class Users extends React.Component {
    state = {
        'users': [],
        'index': null
    }

    componentWillMount() {
        this.fetchUsers();
    }
    fetchUsers = async () => {
        let users = await Methods.getUsers();
        this.setState({ "users": users });
        console.log(users);
    }

    setIndex = _index => this.setState({ "index": _index })

    render() {
        const { users, index } = this.state;
        if (!index) {
            return (
                <View>
                    <TopRow logout={this.props.logout} home={this.props.home} />
                    <ScrollView style={{ marginTop: 70, marginBottom: 50, padding: 20 }}>
                        {users.map((user, i) =>
                            <ListItem
                                key={i}
                                onPress={() => setIndex(i)}
                                leftAvatar={{ source: { uri: "http://gsdl.org.in/gsdl%20image/user.png" } }}
                                title={user.fullname}
                                subtitle={user.gmail}
                                bottomDivider
                            />
                        )}
                    </ScrollView>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.paragraph}>
                        Loading....
                    </Text>
                </View>
            )
        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});