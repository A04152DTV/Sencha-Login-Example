Ext.regController("authentication", {
    authenticate: function(options) {
        var params = {
            username:options.username,
            password:options.password
        };

        app.views.viewport.el.mask('Authenticating');

        var url;
        if(Math.random()){
            url = app.config.url.loginResponseS;
        }
        else{
            url = app.config.url.loginResponseF;
        }

        Ext.Ajax.request({
            scope:this,
            url : url,
            params:params,
            method: 'POST',
            success: function (result, request) {
                options.result = result;
                options.request = request;
                this._handleSuccess(options);
            },
            failure: function (result, request) {
                app.views.viewport.el.unmask();
                options.result = result;
                options.request = request;
                this._handleFailure(options);
            }
        });
    },
    _handleSuccess:function(options) {
        app.views.viewport.el.unmask();


        var jsonResponse = options.result.responseText;

        try{
            jsonResponse = JSON.parse(jsonResponse);
        }
        catch(e){
            console.log("Malformed JSON");
        }

        if (jsonResponse && jsonResponse.success) {
            window.location = '#home';
        }
        else if(jsonResponse.error) {
            Ext.Msg.alert('Login Failed', jsonResponse.error);
        }
        else{
            Ext.Msg.alert('Login Failed', "Unknown error");
        }
    },
    _handleFailure:function(options) {
        var responseText;
        var status = options.result.status;
        var statusText = options.result.statusText;
        Ext.Msg.alert('Login Failed', status + "<br>"+statusText);
    }
});