define([
        'Backbone',
        'Underscore',
        'jQuery',
        'PollModel',
        'AnswerModel'
    ],
    
    function ( Backbone, _, $, PollModel, AnswerModel ){

        PollView = Backbone.View.extend({
            initialize: function ( options ) {
                console.log("PollView initialize");
                this.template = _.template( $("#poll-view").html() );
            },
    
            events: {
                "click #answer1-container": "answer1",
                "click #answer2-container": "answer2",
                "click #end-poll": "endPoll"
            },
    
            answer1: function ( event ) {
                if (this.poll.get('status')) {
                    this.poll.set( { answer1votes: this.poll.get('answer1votes') + 1 } );
                    this.poll.save();
                    this.render(this.poll);
                }
            },
            
            answer2: function ( event ) {
                if (this.poll.get('status')) {
                    this.poll.set( { answer2votes: this.poll.get('answer2votes') + 1 } );
                    this.poll.save();
                    this.render(this.poll);
                }
            },
            
            endPoll: function ()  {
                console.log("PollView endPoll");
                this.poll.set( { status: false } );
                this.poll.save();
                this.render(this.poll);
            },
            
            render: function ( poll ) {
                console.log("PollView render");
                this.poll = poll;
                $(this.el).html( this.template( poll.toJSON() ) );
            }
        });

        return PollView;
    }
);