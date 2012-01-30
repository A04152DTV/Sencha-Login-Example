Ext.ns("app.views.login");
app.views.login.Panel = Ext.extend(Ext.Panel, {
    layout:{
        type:"vbox",
        pack:"center",
        align:"center"
    },

    initComponent:function () {

        //put instances of cards into app.views namespace
        Ext.apply(app.views, {
            loginToolbar:new app.views.login.Toolbar(),
            loginForm:new app.views.login.Form()
        });

        //put instances of cards into viewport
        Ext.apply(this, {
            dockedItems:[
                app.views.loginToolbar
            ],
            items:[app.views.loginForm]
        });

        app.views.login.Panel.superclass.initComponent.apply(this, arguments);
    }
});
