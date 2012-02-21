define([
        'Backbone',
        'Underscore',
        'jQuery',
        'BaseView'
    ],
    
    function ( Backbone, _, $, BaseView, PollListView ){

        MainView = BaseView.extend({
            initialize: function ( options ) {
                console.log("MainView.initialize");
                this.template = _.template( $("#index").html() );
                this.polls = options.polls;
            },
            
            render: function () {
                this.polls.fetch();
                console.log(polls);
                $(this.el).html( this.template() );
            }
        });

        return MainView;
    }
);