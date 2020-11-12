Ext.define('AK.view.MainTabViewModel', {
    extend: 'Ext.app.ViewModel',

    requires: ['AK.model.Posts'],
    //hmmm

    data: {
        post:''
    },
    stores: {
        posts: {
            model: 'AK.model.Posts',
            autoload: true
        }
    }
})