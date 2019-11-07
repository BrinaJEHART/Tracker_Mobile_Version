import * as React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, TouchableHighlight, Button } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import Constants from 'expo-constants';
import Methods from './../Api/Methods';
import { Container, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import moment from 'moment';
import TopRow from './TopRow';
import AddInvoice from './AddInvoice';

export default class Invoices extends React.Component {
    state = {
        'invoices': []
    }

    componentWillMount() {
        this.fetchInvoices();
    }
    fetchInvoices = async () => {
        let invoices = await Methods.getInvoices();
        this.setState({ "invoices": invoices });
        console.log(invoices);
    }
    render() {
        const { invoices, createView } = this.state;
            return (
                <View>
                    {!createView ?
                        <>
                            <TopRow logout={this.props.logout} home={this.props.home} />
                            <ScrollView style={{ marginTop: 60, marginBottom: 50, padding: 20 }}>
                                <Button title="Add new" onPress={() => this.setState({ createView: true })} />
                                {invoices.map((invoice, i) =>
                                    <ListItem
                                        key={i}
                                        leftAvatar={{ source: { uri: "http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Money-Increase-icon.png" } }}
                                        title={invoice.amount + "€ "}
                                        subtitle={invoice.fullname + "\n" + moment(invoice.idate).format('DD.MM.YYYY')}
                                        bottomDivider
                                    />
                                )}
                            </ScrollView>
                        </>
                        :
                        <AddInvoice home={this.props.home} invoices={() => this.setState({ createView: false })} />
                    }

                </View>
            );

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