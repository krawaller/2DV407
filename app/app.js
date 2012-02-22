define([
        'jQuery',
        'Underscore',
        'Backbone',
        'MainRouter'
    ],
    
    function( $, _, BackBone, MainRouter ) {
        return {
            init: function () {
                console.log("App init");
                this.router = new MainRouter;
                Backbone.history.start();
            }
        };
    }
);