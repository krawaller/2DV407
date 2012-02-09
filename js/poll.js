var Poll = Backbone.Model.extend({
    defaults: {
        "id": null,
        "question": "",
        "answers": {},
        "status": false,
        "private": false,
        "date": 1970-01-01,
        "code": ""
    },
    
    validate: function(attribs){
        if(attribs.question === ""){
            this.isValid = false;
            return "You must enter a question.";
        }
    },
    
    initialize: function(){
        console.log("Poll model initialized");
        this.bind("error", function(model, error){
            console.log(error);
        });
    }
});

var MainView = Backbone.View.extend({
    el: $('#content'),
    
    initialize: function() {
        console.log("MainView initialized");
        this.render();
    },
    
    render: function( event ) {
        $(this.el).empty();
        var template = _.template( $("#polls_template").html() );
        console.log(pollCollection.toJSON());
        $(this.el).html( template(pollCollection.toJSON()) );
        return this;
    },
    
    events: {
        "click .new-poll-btn": "createPoll"
    },
    
    createPoll: function ( event ) {
        new CreatePollView();
    }
});

var CreatePollView = Backbone.View.extend({
    el: $('#content'),
    
    initialize: function() {
        console.log("CreatePollView initialized");
        this.render();
    },
 
    render: function( event ) {
        $(this.el).empty();
        var template = _.template( $("#new_poll_template").html() );
        $(this.el).html( template );
        return this;
    },
    
    events: {
        "click .add-answer": "addAnswer",
        "click .create-poll-btn": "newPoll"
    },
    
    addAnswer: function ( event ) {
        console.log("NotYetImplemented")
    },
    
    newPoll: function ( event ) {
        var poll = new Poll();
        var answers = Array();
        $('#answers input[type=input]').each(function(index) {
            answers.push($(this).val());
        });
        poll.set( { id: $("#temp-id").val() , question: $("#question").val() } );
        
        if (poll.isValid) {
            $(this.el).undelegate('.create-poll-btn', 'click');
            pollCollection.add(poll);
            console.log("Poll added to collection");
            mainView.render();
        }
    }
});

var PollCollection = Backbone.Collection.extend({
    model: Poll
});

var pollCollection = new PollCollection();
var mainView = new MainView();