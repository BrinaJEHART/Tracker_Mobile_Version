import axios from 'axios';
const API = "https://brinajehart.si/tracker/";
export default class Methods {

    //USER MODEL METHODS
    static async getUsers() {
        return new Promise(async resolve => {
            await axios.get(`${API}Users.php`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }

    static async getUserById(_id) {
		return new Promise(async resolve => {
			await axios.get(`${API}GetUser.php?id=${_id}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }

    //AUTH REQUESTS
    static async login(_gmail, _password) {
		return new Promise(async resolve => {
			await axios.get(`${API}Login.php?gmail=${_gmail}&password=${_password}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }

    static async register(_fullname, _gmail, _password) {
        console.log(_fullname, _gmail, _password, "tole dobi v API");
		return new Promise(async resolve => {
			await axios.get(`${API}CreateUser.php?fullname=${_fullname}&gmail=${_gmail}&password=${_password}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }


    //INVOICE MODEL METHODS
    static async getInvoices() {
		return new Promise(async resolve => {
			await axios.get(`${API}Invoices.php`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }

    static async createInvoice(_token, _amount) {
		return new Promise(async resolve => {
            console.log(_token, _amount, "72");
			await axios.get(`${API}CreateInvoice.php?token${_token}&amount=${_amount}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }



    static async deleteInvoice(_id) {
		return new Promise(async resolve => {
			await axios.get(`${API}DeleteInvoice.php?id=${_id}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    }

    /*static async getInvoiceById(_id) {
        await axios.post(`${API}GetUser.php`, {
            id: _id,
        })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }*/
}