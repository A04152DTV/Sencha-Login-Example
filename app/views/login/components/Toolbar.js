app.views.login.Toolbar = Ext.extend(Ext.Toolbar, {

    // http://www.sencha.com/learn/idiomatic-layouts-with-sencha-touch
    setProfile:function (profile) {
        if (profile === "landscapePhone" || profile === "portraitTablet") {
            this.setTitle('Landscape Titles can be longer');
        }
        else {
            this.setTitle('Portrait');
        }
    }
});