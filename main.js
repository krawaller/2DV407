require.config({
    paths: {
        // Libraries
        jQuery : 'jquery',
        Underscore : 'underscore',
        Backbone : 'backbone',
        
        // Application
        // Collections
        PollCollection : 'app/collections/polls',
        
        
        // Models
        PollModel : 'app/models/poll',
        
        // Routers
        MainRouter : 'app/routers/main',
        
        //Views
        BaseView : 'app/views/baseview',
        MainView : 'app/views/mainview',
        PollListView : 'app/views/polllistview',
        PollListentryView : 'app/views/polllistentryview',
        CreateView : 'app/views/createview'
    }
});

require( ['app/app'], function( App ) { App.init(); } );