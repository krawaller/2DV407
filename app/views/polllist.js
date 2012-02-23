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
                this.lol = $('#ended-polls');
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
                if (!model.attributes.private && model.attributes.status == true) {
                    console.log("PollListView addOne public active");
                    $(this.el).append("<li><a href='#poll/" + model.attributes.id + "'>" + model.attributes.question + "</a></li>");
                } else if (model.attributes.status == false) {
                    console.log("PollListView addOne public ended");
                    $(this.el).append("<li><a href='#poll/" + model.attributes.id + "'>" + model.attributes.question + "</a> (Ended)</li>");
                }
                model.save();
            }
        });
    
        return PollListView;
    }
);
