define([
        'Backbone'
    ],
    
    function ( Backbone ) {
        PollModel = Backbone.Model.extend({
            defaults : {
                "question": "",
                "answers":
                {
                    "answer":
                    {
                        "answer": "",
                        "votes": 0
                    },
                    "answer":
                    {
                        "answer": "",
                        "votes": 0
                    },
                },
                "status": false,
                "private": false,
                "date": 1970-01-01
            }
        });

        return PollModel;
    }
);