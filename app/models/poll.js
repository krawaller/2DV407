define([
        'Backbone'
    ],
    
    function ( Backbone ) {
        PollModel = Backbone.Model.extend({
            defaults : {
                "id": null,
                "question": "",
                "answer1": "",
                "answer1votes": 0,
                "answer2": "",
                "answer2votes": 0,
                "status": true,
                "private": false,
                "date": 1970-01-01
            }
        });

        return PollModel;
    }
);