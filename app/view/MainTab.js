Ext.define('AK.view.MainTab', {
    extend: 'Ext.panel.Panel',
    viewModel:{
        xclass: 'AK.view.MainTabViewModel'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'tabpanel',
        flex: 1,
        //layout: 'hbox',
        items: [{
            title: 'Posts',
        }, {
            xclass: 'AK.view.Search',
            flex: 1
        },{
            xclass: 'AK.view.Grid',
            flex:1
        }]
    }],

});
// },{
//     xclass: 'AK.view.Grid'
// }]

// items: [{
//     xtype: 'tabpanel',
//     flex: 1,
//     //layout: 'hbox',
//     items: [{
//         title: 'Posts',
//         items: [{
//             xtype: 'form',
//             flex: 1,
//             layout: 'hbox',
//             // align: 'stretch',
//             items: [{
//                 xtype: 'textfield',
//                 emptyText: 'Title:',
//                 flex: 1,
//             }, {
//                 xtype: 'textfield',
//                 emptyText: 'Body:',
//                 flex: 1
//
//             }],
//             bbar: ['->', {
//                 xtype: 'button',
//                 text: 'Search',
//             }]
//         }]
//     }]
// }]


