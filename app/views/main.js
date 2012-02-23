define([
        'Backbone',
        'Underscore',
        'jQuery',
        'PollListView'
    ],
    
    function ( Backbone, _, $, PollListView ){

        MainView = Backbone.View.extend({
            initialize: function ( options ) {
                console.log("MainView initialize");
                this.template = _.template( $("#index").html() );
                this.polls = options.polls;
            },
            
            render: function () {
                console.log("MainView render");
                $(this.el).html( this.template() );
                this.collection.fetch();
                this.collection.comparator = function(model) {
                    return -model.get('id');
                }
                this.collection.sort();
                pollListView = new PollListView( { collection: this.collection } );
                pollListView.render();
                this.$("#polls").html(pollListView.el);
            }
        });

        return MainView;
    }
);