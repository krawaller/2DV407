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
                _.bindAll(this, 'render', 'addAll', 'addOne');
                this.collection.bind('add', this.addOne);
            },
            
            render: function() {
                console.log("PollListView render");
                this.addAll();
                return this;
            },
            
            addAll: function() {
                console.log("PollListView addAll");
                this.collection.each(this.addOne);
            },
            
            addOne: function( poll ) {
                console.log("PollListView addOne");
                $(this.el).append("<li><a href='#poll/" + poll.attributes.id + "'>" + poll.attributes.question + "</a></li>");
                poll.save();
            }
        });
    
        return PollListView;
    }
);
