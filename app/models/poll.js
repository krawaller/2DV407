define([
        'Backbone',
        'AnswerModel',
        'AnswerCollection'
    ],
    
    function ( Backbone,AnswerModel,AnswerCollection ) {
        PollModel = Backbone.RelationalModel.extend({
            defaults : {
                "id": null,
                "question": "",
                "status": true,
                "private": false,
                "date": 1970-01-01
            },
            
            relations: [
                {
                    type: Backbone.HasMany, 
                    key: 'answers',
                    relatedModel: AnswerModel,
                    includeInJSON: Backbone.Model.prototype.idAttribute,
                    collectionType: AnswerCollection,
                    reverseRelation: {
                        key: 'poll'
                    }
                }
            ]
        });

        return PollModel;
    }
);