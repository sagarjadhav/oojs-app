// Use Strict
'user strict';

var ServiceManager = ( function() {

    // Constructor
    function ServiceManager() {
        //this.apiCall();
    }

    // API Call
    ServiceManager.prototype.apiCall = function (endPoint, type, data) {

        // Promise initiate
        var $d = new $.Deferred();

        $.ajax({
            headers : { 'Content-Type' : 'application/json' },
            data : JSON.stringify(data),
            url : CONSTANT.SERVICE_URL + endPoint,
            type : type,
            success : function(response){
                //console.log(response);
                $d.resolve(response);
            },
            error : function(error){
                // console.log(error);
                $d.reject(error);
            },
        });

        // Promise return
        return $d.promise();
    }

    // Return Class
    return ServiceManager;
})();