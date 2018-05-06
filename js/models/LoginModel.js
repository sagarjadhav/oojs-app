// Use Strict
'user strict';

var LoginModel = ( function() {

    // Constructor
    function LoginModel() {
        this.serviceManagerObject = new ServiceManager();
    }

    LoginModel.prototype.validateUser = function(username, password) {
        console.log('Username=>'+username);
        console.log('Password=>'+password);

        // API call
        this.serviceManagerObject.apiCall(CONSTANT.END_POINTS.LOGIN, CONSTANT.SERVICE_TYPE_GET);
    }

    // Return Class
    return LoginModel;
})();