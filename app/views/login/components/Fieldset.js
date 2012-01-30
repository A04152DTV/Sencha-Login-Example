app.views.login.Fieldset = Ext.extend(Ext.form.FieldSet, {
    instructions:"<a href='#'>Forgot Password?</a>",
    defaults:{
        labelWidth:115,
        width:230
    },
    items:[
        {
            xtype: 'textfield',
            name : 'username',
            label: 'Username',
            value:"test"
        },
        {
            xtype: 'passwordfield',
            name : 'password',
            label: 'Password',
            value:"test"
        },
        {
            text:"Login",
            xtype: 'button',
            handler:function() {
                var formValues = app.views.loginForm.getValues();
                var username = formValues.username;
                var password = formValues.password;
                Ext.dispatch({
                    controller: 'authentication',
                    action: 'authenticate',
                    username:username,
                    password:password
                });
            }
        }
    ]
});