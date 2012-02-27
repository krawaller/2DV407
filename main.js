require.config({
    paths: {
        // Libraries
        jQuery : 'jquery',
        Underscore : 'underscore',
        Backbone : 'backbone',
        
        // Application
        // Collections
        PollCollection : 'app/collections/polls',
        AnswerCollection : 'app/collections/answers',
        
        
        // Models
        PollModel : 'app/models/poll',
        AnswerModel : 'app/models/answer',
        
        // Routers
        MainRouter : 'app/routers/main',
        
        //Views
        MainView : 'app/views/main',
        PollListView : 'app/views/polllist',
        CreateView : 'app/views/create',
        PollView : 'app/views/poll'
    }
});

require( ['app/app'], function( App ) { App.init(); } );