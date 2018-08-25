define([
    'js/utils/CONSTANT',
    'js/services/ServiceManager',
], function(CONSTANT, ServiceManager) {
    // Use Strict
    'user strict';

    // Constructor
    function UserModel() {
        this.serviceManagerObject = new ServiceManager();
    }

    UserModel.prototype.fetchUsersData = function() {
        var isUserValid = false;

        // Promise initiate
        var $d = new $.Deferred();

        // API call
        this.serviceManagerObject.apiCall(CONSTANT.END_POINTS.USERS, CONSTANT.SERVICE_TYPE_GET).then( function (d) {
            // Return Validate User
            $d.resolve(d);
        }).fail( function(e){
            // console.log(e); 
            $d.reject(e);
        });

        // Promise return
        return $d.promise();
    }

    // Return Class
    return UserModel;
});