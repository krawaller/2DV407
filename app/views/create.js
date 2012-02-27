define([
        'Backbone',
        'Underscore',
        'jQuery'
    ],
    
    function ( Backbone, _, $ ){

        CreateView = Backbone.View.extend({
            initialize: function ( options ) {
                console.log("CreateView initialize");
                this.template = _.template( $("#create-poll").html() );
                this.answers = options.answers;
            },
    
            events: {
                "click .add-answer": "addAnswer",
                "click .create-poll-btn": "createPoll"
            },
    
            addAnswer: function ( event ) {
                console.log("NotYetImplemented");
            },
            
            createPoll: function ( event ) {
                console.log("CreateView createPoll");
                
                answer = new AnswerModel( {
                    'id': 'answer-1',
                    'answer': this.$("#answer1").val()
                });
                
                date = new Date();
                month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1));
                day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
                today = date.getFullYear() + '-' + month + '-' + day;
                
                poll = new PollModel( {
                                        'id': (this.collection.length + 1),
                                        'question': this.$("#question").val(),
                                        'private': this.$('#private').is(":checked"),
                                        'date': today,
                                        'answers': ['answer-1']
                                      } );
                
                this.collection.add( poll );
            },
            
            render: function () {
                console.log("CreateView render");
                $(this.el).html( this.template() );
            }
        });

        return CreateView;
    }
);