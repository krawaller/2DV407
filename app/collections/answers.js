define([
        'Backbone',
        'AnswerModel'
    ],
    
    function ( Backbone, AnswerModel ) {
        AnswerCollection = Backbone.Collection.extend({
            localStorage: new Store("answers"),
            model: AnswerModel
        });
    
        return AnswerCollection;
    }
);