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
                this.collection.add( new PollModel( { question: this.$("#question").val(), answer1: this.$("#answer1").val(), answer2: this.$("#answer2").val() }) );
            },
            
            render: function () {
                console.log("CreateView render");
                $(this.el).html( this.template() );
            }
        });

        return CreateView;
    }
);