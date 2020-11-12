Ext.define('AK.view.Search', {
    extend: 'Ext.form.Panel',
    layout: {
        type: 'hbox',
        align: 'stretcb'
    },

    // fieldDefaults: {
    //     flex: 1,
    // },
    items: [{
        xtype: 'textfield',
        emptyText: 'Title:',
        flex: 1,
    }, {
        xtype: 'textfield',
        emptyText: 'Body:',
        flex: 1,


    }],
    bbar: ['->', {
        xtype: 'button',
        text: 'Search',

        //handler
    }],

})