define([
    'js/models/UserModel'
], function(UserModel) {
    // Check strict
    'use strict';

    // Start with Class Structure and Prototype
    // This is constructor as well
    function UserController() {
        this.userModelObject = new UserModel();
        this.init();
    }

    // Init Function
    UserController.prototype.init = function() {
        // Event Listeners
        // this.addEventListeners();
    }

    // Get Users
    UserController.prototype.getUsers = function() {
        var that = this;
        // Fetch users data
        this.userModelObject.fetchUsersData().then( function (d) {
            that.displayUsers(d);
        }).fail( function(error){
            alert(error);
        });

    }

    // Dispaly Users
    UserController.prototype.displayUsers = function(d) {
        var str = '';
        var users = d.users;

        for( var i = 0; i < users.length; i++ ) {
            str = str + '<tr><td>'+users[i].firstName+'</td><td>'+users[i].lastName+'</td><td>'+users[i].emailId+'</td><td>'+users[i].contactNo+'</td><td>'+users[i].designation+'</td></tr>';
        }

        // Get users table
        var usersTable = document.getElementById('users_table');
        usersTable.innerHTML = str;
    }

    // Return Controller
    return UserController;

});