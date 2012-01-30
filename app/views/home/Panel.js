Ext.ns("app.views.home");
app.views.home.Panel = Ext.extend(Ext.Panel, {
    initComponent:function () {

        Ext.regModel('Contact', {
            fields:['firstName', 'lastName']
        });

        var store = new Ext.data.JsonStore({
            model:'Contact',
            sorters:'lastName',

            getGroupString:function (record) {
                return record.get('lastName')[0];
            },

            data:[
                {firstName:'Tommy', lastName:'Maintz'},
                {firstName:'Rob', lastName:'Dougan'},
                {firstName:'Ed', lastName:'Spencer'},
                {firstName:'Jamie', lastName:'Avins'},
                {firstName:'Aaron', lastName:'Conran'},
                {firstName:'Dave', lastName:'Kaneda'},
                {firstName:'Michael', lastName:'Mullany'},
                {firstName:'Abraham', lastName:'Elias'},
                {firstName:'Jay', lastName:'Robinson'}
            ]
        });

        //put instances of cards into viewport
        Ext.apply(this, {
            items:[
                {
                    fullscreen:true,
                    xtype:"list",
                    itemTpl:'{firstName} {lastName}',
                    grouped:true,
                    indexBar:true,

                    store:store
                }
            ]
        });

        app.views.home.Panel.superclass.initComponent.apply(this, arguments);
    }
});
