Ext.define('AK.view.Grid', {
    extend: 'Ext.grid.Panel',
    viewModel:{
        xclass: 'AK.view.MainTabViewModel'
    },
    bind: '{posts}',

    columns: [{
        text: 'ID',
        //width
        //dataIndex
    }, {
        text: 'used ID',
        //dataIndex:
        flex: 1,
    }, {
        text: 'Title',
        //dataIndex
        flex: 1
    },{
        text: 'Body',
        //dataIndex
        flex:2
    }],
    // listeners: {
    //     itemdbclick: 'onPostClick'
    // }
})