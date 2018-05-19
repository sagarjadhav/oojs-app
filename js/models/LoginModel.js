// Use Strict
'user strict';

var LoginModel = ( function() {

    // Constructor
    function LoginModel() {
        this.serviceManagerObject = new ServiceManager();
    }

    LoginModel.prototype.validateUser = function(username, password) {
        var isUserValid = false;

        // Promise initiate
        var $d = new $.Deferred();

        // console.log('Username=>'+username);
        // console.log('Password=>'+password);

        // API call
        this.serviceManagerObject.apiCall(CONSTANT.END_POINTS.LOGIN, CONSTANT.SERVICE_TYPE_GET).then( function (d) {
            if( username === d.username && password === d.password ) {
                isUserValid = true;
            }

            // Return Validate User
            $d.resolve(isUserValid);

        }).fail( function(e){
            // console.log(e); 
            $d.reject(e);
        });

        // Promise return
        return $d.promise();
    }

    // Return Class
    return LoginModel;
})();