// Check strict
'use strict';

var LoginController = ( function() {

    // Start with Class Structure and Prototype
    // This is constructor as well
    function LoginController() {
        this.username = '';
        this.password = '';
        this.loginModelObject = new LoginModel();
        this.init();
    }

    // Init Function
    LoginController.prototype.init = function() {
        // Event Listeners
        this.addEventListeners();
    }

    // Add Event Listeners
    LoginController.prototype.addEventListeners = function() {
        // Get Login Form By ID
        var getLgoinForm = document.getElementById('formLogin');

        // Catch Submit Event
        //getLgoinForm.addEventListener('submit', this.getLoginFormData);

        $( getLgoinForm ).on('submit', { context: this }, this.getLoginFormData);
    }

    // Get Login Form Data
    LoginController.prototype.getLoginFormData = function( event ) {
        // This is class scope so we used `that` instead of this.
        var that = event.data.context;

        // Here `this` is the form scope
        // Get Data with Serialize Array using jQuery
        var LoginFormData = $(this).serializeArray();

        // We used `that` as a class scope here.
        // Extract Data
        that.extractLoginFormData(LoginFormData);
    }

    // Extract Login Form Data
    LoginController.prototype.extractLoginFormData = function( getData ) {
        // Extract values from Array
        for( var i = 0; i < getData.length; i++ ) {

            // Check for Username
            if( getData[i].name === 'username' ) {
                this.username = getData[i].value;
            }

            // Check for Password
            if( getData[i].name === 'password' ) {
                this.password = getData[i].value;
            }
        }

        // Pass username/password to validateUser
        this.loginModelObject.validateUser(this.username, this.password).then( function (isValid) {
            if( isValid ) {
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid Credentials');
            }
        }).fail( function(error){
            alert(error);
        });

        // console.log(this.username);
        // console.log(this.password);
    }

    // Return Controller
    return LoginController;

})();