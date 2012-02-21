require.config({
    paths: {
        // Libraries
        jQuery : 'jquery',
        Underscore : 'underscore',
        Backbone : 'backbone',
        
        // Application
        // Collections
        
        
        // Models
        
        
        // Routers
        MainRouter : 'app/routers/main',
        
        //Views
        BaseView : 'app/views/baseview',
        MainView : 'app/views/mainview'
    }
});

require( ['app/app'], function( App ) { App.init(); } );