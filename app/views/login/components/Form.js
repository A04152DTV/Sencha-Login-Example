app.views.login.Form = Ext.extend(Ext.form.FormPanel, {
    height: 333,

    initComponent: function() {
        Ext.apply(app.views, {
            loginFieldset: new app.views.login.Fieldset()
        });

        Ext.apply(this, {
            items: [
                app.views.loginFieldset
            ]
        });
        app.views.login.Form.superclass.initComponent.apply(this, arguments);
    }
});