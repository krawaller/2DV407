define([
        'Backbone',
        'Underscore',
        'jQuery'
    ],
    
    function ( Backbone, _, $ ){

        PollView = Backbone.View.extend({
            initialize: function ( options ) {
                console.log("PollView initialize");
                this.template = _.template( $("#poll-view").html() );
            },
            
            render: function ( id ) {
                console.log("PollView render");
                $(this.el).html( this.template( polls.get( id ).attributes ) );
            }
        });

        return PollView;
    }
);