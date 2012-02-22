define([
        'Backbone'
    ],
    
    function ( Backbone ) {
        PollModel = Backbone.Model.extend({
            defaults : {
                "id": null,
                "question": "",
                "answer1": "",
                "answer2": "",
                "status": false,
                "private": false,
                "date": 1970-01-01
            }
        });

        return PollModel;
    }
);