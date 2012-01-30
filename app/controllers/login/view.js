Ext.regController("loginView", {
    createLogin:function(options) {

        //put instances of cards into app.views namespace
        Ext.apply(app.views, {
            loginPanel: new app.views.login.Panel()
        });

        Ext.dispatch({
            controller:'loginView',
            action:'showLogin'
        });
    },
    showLogin:function(options) {
        Ext.dispatch({
            controller:'Utility',
            action:'clearViewport'
        });

        // Put the loginPanel as the active card
        app.views.viewport.setActiveItem(
            app.views.loginPanel
        );
    }
});