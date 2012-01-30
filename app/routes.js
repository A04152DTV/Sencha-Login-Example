Ext.Router.draw(function(map) {

    //maps the url http://mydomain.com/#dashboard to the authentication controller's gotoLogin action
    map.connect('login', {controller: 'loginView', action: 'createLogin'});
    map.connect('home', {controller: 'homeView', action: 'createHome'});
});