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
                
                date = new Date();
                month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1));
                day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
                today = date.getFullYear() + '-' + month + '-' + day;
                
                this.collection.add( new PollModel( {
                                                        'id': (this.collection.length + 1),
                                                        'question': this.$("#question").val(),
                                                        'answer1': this.$("#answer1").val(),
                                                        'answer2': this.$("#answer2").val(),
                                                        'private': this.$('#private').is(":checked"),
                                                        'date': today
                                                    }));
            },
            
            render: function () {
                console.log("CreateView render");
                $(this.el).html( this.template() );
            }
        });

        return CreateView;
    }
);