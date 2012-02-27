define([
        'Backbone'
    ],
    
    function ( Backbone ) {
        AnswerModel = Backbone.RelationalModel.extend({
            defaults : {
                "answer": "",
                "votes": 0
            }
        });

        return AnswerModel;
    }
);