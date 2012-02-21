define([
        'Backbone',
        'Underscore',
        'jQuery',
        'MainView',
        'CreateView',
        'PollCollection'
    ],
    
    function( Backbone, _, $, MainView ) {
        var MainRouter = Backbone.Router.extend({
            routes : {
                "" : "main",
                "poll/create" : "create"
            },
            
            collections: {},
            
            views: {},
            
            initialize: function () {
                _.bindAll( this, 'main' );
                polls = new PollCollection;
                polls.fetch();
                
                this.collections.polls = polls;
                
                mainview = new MainView( { polls: polls } );
                $("#content").append( mainview.el );
                
                this.views.main = mainview;
                
                createview = new CreateView( { collection: polls } );
                $("#content").append( createview.el );
                
                this.views.create = createview;
            },
            
            main: function() {
                this.setBody( this.views.main );
                this.view.render();
            },
    
            create : function () {
                this.setBody( this.views.create );
                this.view.render();
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