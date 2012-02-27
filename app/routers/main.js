define([
        'Backbone',
        'Underscore',
        'jQuery',
        'MainView',
        'CreateView',
        'PollView',
        'PollCollection',
        'AnswerCollection'
    ],
    
    function( Backbone, _, $, MainView, CreateView, PollView, PollCollection, AnswerCollection ) {
        var MainRouter = Backbone.Router.extend({
            routes : {
                "" : "main",
                "poll/create" : "create",
                "poll/:id" : "poll"
            },
            
            collections: { },
            
            views: { },
            
            initialize: function () {
                console.log("Router initialize");
                _.bindAll( this, 'main' );
                polls = new PollCollection;
                polls.fetch();
                
                this.collections.polls = polls;
                
                mainView = new MainView( { collection: polls } );
                $("#content").append( mainView.el );
                
                this.views.main = mainView;
                
                createView = new CreateView( { collection: polls } );
                $("#content").append( createView.el );
                this.views.create = createView;
                
                pollView = new PollView();
                $("#content").append( pollView.el );
                
                this.views.poll = pollView;
            },
            
            main: function() {
                console.log("Router main");
                this.setBody( this.views.main );
                this.view.render();
            },
            
            create : function () {
                console.log("Router create");
                this.setBody( this.views.create );
                this.view.render();
            },
            
            poll : function( id ) {
                console.log("Router poll");
                this.setBody( this.views.poll );
                this.view.render( polls.get( id ) );
            },
            
            setBody: function(view) {
                if (typeof this.view != 'undefined'){
                    this.view.remove();
                }
                
                this.view = view;
                $("#content").append( view.el );
            }
        });
        
        return MainRouter;
    }
);