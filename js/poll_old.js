var MainView = Backbone.View.extend({
    el: $('#content'),
    
    initialize : function() {
        this.render();
    },
    
    render: function(){
        var template = _.template( $("#polls_template").html(), {} );
        $(this.el).html( template );
    },
    
    events: {
        "click input[type=button]": "newPoll"
    },
    
    newPoll: function ( event ) {
        new CreatePollView();
    }
});

var CreatePollView = Backbone.View.extend({
    el: $('#content'),
    
    initialize : function() {
        this.render();
    },
    
    render: function(){
        $(this.el).empty();
        var template = _.template( $("#new_poll_template").html(), {} );
        $(this.el).html( template );
    },
    
    events: {
        "click .add-answer": "addAnswer"
    },
    
    addAnswer: function ( event ) {
        console.log("addAnswer");
    }
});

var mainView = new MainView();