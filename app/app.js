Ext.regApplication({
    name: 'app',
    defaultUrl: 'login',
    launch: function() {
        this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function() {
//        if (!device || !this.launched) {return;} // comment this line if you're not using phonegap
        this.views.viewport = new this.views.Viewport();
    },

    // http://www.sencha.com/learn/idiomatic-layouts-with-sencha-touch
    profiles: {
        portraitPhone: function() {
            return Ext.is.Phone && Ext.orientation == 'portrait';
        },
        landscapePhone: function() {
            return Ext.is.Phone && Ext.orientation == 'landscape';
        },
        portraitTablet: function() {
            return !Ext.is.Phone && Ext.orientation == 'portrait';
        },
        landscapeTablet: function() {
            return !Ext.is.Phone && Ext.orientation == 'landscape';
        }
    }
});