import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Users from './components/Users';
import Invoices from './components/Invoices';
import AddInvoice from './components/AddInvoice';

export default class App extends React.Component {
    state = {
        navigate: "Login"
    }

    gotoAddInvoice = () => this.setState({ navigate: 'AddInvoice' })
    gotoRegister = async () => this.setState({navigate: 'Register'})
    gotoLogin = () => this.setState({navigate: 'Login'})
    gotoUsers = () => this.setState({navigate: 'Users'})
    gotoInvoices = () => this.setState({navigate: 'Invoices'})
    gotoHome = () => this.setState({navigate: 'Home'})

    render() {
        const components = {
            Register: <Register home={this.gotoHome} login={this.gotoLogin} />,
            Login: <Login invoices={this.gotoInvoices} register={this.gotoRegister} home={this.gotoHome} />,
            Users: <Users home={this.gotoHome} logout={this.gotoLogin} />,
            Invoices: <Invoices home={this.gotoHome} logout={this.gotoLogin} />,
            Home: <Home users={this.gotoUsers} invoices={this.gotoInvoices} logout={this.gotoLogin} />,
        };
        let { navigate } = this.state;
        return (
            <View>{components[navigate]}</View>
        );
    }
}
