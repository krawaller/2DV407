define([
        'Backbone',
        'PollModel'
    ],
    
    function ( Backbone, PollModel ) {
        PollCollection = Backbone.Collection.extend({
            localStorage: new Store("polls"),
            model: PollModel
        });
    
        return PollCollection;
    }
);