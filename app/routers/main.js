define(['Backbone', 'Underscore', 'jQuery', 'MainView'], 
    function( Backbone, _, $, MainView ) {
        var MainRouter = Backbone.Router.extend({
            routes : {
                "" : "main"
            },
            
            collections: {},
            
            views: {},
            
            initialize: function () {
                _.bindAll( this, 'main' );
                
                mainview = new MainView();
                $("#content").append( mainview.el );
                
                this.views.main = mainview
            },
            
            main: function() {
                this.setBody( this.views.main );
                this.view.render();
            },
            
            setBody: function(view) {
                if (typeof this.view != 'undefined'){
                    this.view.unrender();
                }
                
                this.view = view;
                $("#content").append( view.el );
            }
        });
        
        return MainRouter;
    }
);