define([
        'Backbone',
        'Underscore',
        'jQuery',
        'PollModel'
    ],
    
    function(Backbone, _, $, PollListentryView, PollModel){
        PollListView = Backbone.View.extend({
            initialize: function( options ) {
                console.log("PollListView initialize");
                this.template = _.template("<h1>Polls</h1>");
                _.bindAll(this, 'render', 'addAll', 'addOne');
                this.collection.bind('add', this.addOne);
            },
            
            render: function() {
                console.log("PollListView render");
                this.collection.fetch();
                this.addAll();
                return this;
            },
            
            addAll: function() {
                console.log("PollListView addAll");
                this.collection.each(this.addOne);
            },
            
            addOne: function( model ) {
                console.log("PollListView addOne");
                $(this.el).append("<li><a href='#poll/" + model.attributes.id + "'>" + model.attributes.question + "</a></li>");
                model.save();
            }
        });
    
        return PollListView;
    }
);
