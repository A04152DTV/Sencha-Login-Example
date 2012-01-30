Ext.regController("homeView", {
    createHome:function(options) {

        //put instances of cards into app.views namespace
        Ext.apply(app.views, {
            homePanel: new app.views.home.Panel()
        });

        Ext.dispatch({
            controller:'homeView',
            action:'showHome'
        });
    },
    showHome:function(options) {
        Ext.dispatch({
            controller:'Utility',
            action:'clearViewport'
        });
        // Put the homePanel as the active card
        app.views.viewport.setActiveItem(
            app.views.homePanel
        );
    }
});