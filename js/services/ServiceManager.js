// Use Strict
'user strict';

var ServiceManager = ( function() {

    // Constructor
    function ServiceManager() {
        //this.apiCall();
    }

    // API Call
    ServiceManager.prototype.apiCall = function (endPoint, type, data) {
        $.ajax({
            headers : { 'Content-Type' : 'application/json' },
            data : JSON.stringify(data),
            url : CONSTANT.SERVICE_URL + endPoint,
            type : type,
            success : function(response){
                console.log(response);
            },
            error : function(error){
                console.log(error);
            },
        });
    }

    // Return Class
    return ServiceManager;
})();