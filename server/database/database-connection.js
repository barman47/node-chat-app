class DatabaseConnection {
    constructor () {
        this.MongoClient = require('mongodb').MongoClient;
        this.dbUrl = 'mongodb://localhost:27017/chatapp';
    }

    connectToDataBase (dbUrl) {
        this.MongoClient.connect(this.dbUrl, (err, db) => {
            if (err) {
                return console.log('Unable to Connect to Database Server');
            }
            console.log('Connected to Database Server');
            //db.close();
        });
    }

    createUser (firstname, lastname, username, email, password, gender) {
        this.firstname = firstname;
        this.lastname = lastname
        this.username = username
        this.email = email;
        this.password = password;
        this.gender = gender;

        var userObject = {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.email,
            password: this.password,
            gender: this.gender
        };

        var user = require('../models/users');
        var newUser = user.UserSchema;
        connectToDataBase(this.dbUrl);
        newUser.save().then((user) => {
            console.log('Successfully Saved User')
        }, (err) => {
            console.log('Unable to save user to DataBase.');
        });
    }
}

module.exports = DatabaseConnection;
