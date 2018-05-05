// Check strict
'use strict';

// Always Start with Anonymous function
( function() {
    window.onload = init;

    function init() {

        // Event Listeners
        addEventListeners();
    }

    function addEventListeners() {
        // Get Login Form By ID
        var getLgoinForm = document.getElementById('formLogin');

        // Catch Submit Event
        getLgoinForm.addEventListener('submit', getLoginData);
    }

    function getLoginData(event) {
        // Get Data with Serialize Array using jQuery
        var LoginFormData = $(this).serializeArray();

        // Extract Data
        extractLoginData(LoginFormData);
    }

    function extractLoginData( getData ) {
        // Define variables
        var username = null;
        var password = null;

        // Extract values from Array
        for( var i = 0; i < getData.length; i++ ) {

            // Check for Username
            if( getData[i].name === 'username' ) {
                username = getData[i].value;
            }

            // Check for Password
            if( getData[i].name === 'password' ) {
                password = getData[i].value;
            }
        }

        console.log(username);
        console.log(password);
    }

} ) ();