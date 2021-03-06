var Poll = Backbone.Model.extend({
    defaults : {
        "id": null,
        "question": "",
        "answers":
        {
        },
        "status": false,
        "private": false,
        "date": 1970-01-01
    }
});

var PollsView = Backbone.View.extend({     
    render : function() {
        console.log("PollsView.render");
        this.el.innerHTML = "<a href='#poll/" + this.model.get('id') + "'>" + this.model.get('question') + "</a>";
        return this;
    }
});

var PollCollectionView = Backbone.View.extend({
    initialize : function() {
        console.log("PollCollectionView.initialize");
        _(this).bindAll('add');
        this._pollViews = [];
        
        this.collection.each(this.add);
        
        this.collection.bind('add', this.add);
    },
    
    events: {
        "click .create-poll": "createPoll"
    },
    
    createPoll: function( event ) {
        console.log("PollCollectionView.newPoll");
        new CreatePollView({
            collection: this.collection
        });
    },
    
    add : function( poll ) {
        console.log("PollCollectionView.add");
        var updatingPollsView = new UpdatingPollsView({
            tagName : 'li',
            model : poll
        });
        
        this._pollViews.push(updatingPollsView);
        
        $(this.el).append(updatingPollsView.render().el);
    },
    
    render : function() {
        console.log("PollCollectionView.render");
        var that = this;
        $(this.el).empty();
        
        var template = _.template( $("#index").html() );
        $(this.el).html( template );
        
        _(this._pollViews).each(function( pollView ) {
            $('.polls').append(pollView.render().el);
        });
        
        return this;
    }
});

var UpdatingPollsView = PollsView.extend({
    initialize : function( options ) {
        console.log("UpdatingPollsView.initialize");
        this.render = _.bind(this.render, this);
        
        this.model.bind('change:question', this.render);
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
        var template = _.template( $("#create-poll").html() );
        $(this.el).html( template );
        return this;
    },
    
    events: {
        "click .add-answer": "addAnswer",
        "click .create-poll-btn": "newPoll"
    },
    
    addAnswer: function ( event ) {
        console.log("NotYetImplemented");
    },
    
    newPoll: function ( event ) {
        var poll = new Poll();
        var answers = Array();
        $('#answers input[type=input]').each(function(index) {
            answers.push($(this).val());
        });
        
        poll.set( { 'id': $("#temp-id").val() , 'question': $("#question").val(), 'private': $('#private').is(":checked") } );
        
        $(this.el).undelegate('.create-poll-btn', 'click');
        this.collection.add(poll);
        console.log("Poll added to collection");
        pollCollectionView.render();
    }
});

var PollView = Backbone.View.extend({
    el: $('#content'),
    
    initialize: function() {
        console.log("PollView initialized");
        this.render();
    },
 
    render: function( event ) {
        $(this.el).empty();
        var template = _.template( $("#poll-view").html() );
        $(this.el).html( template( polls.get( this.id ).attributes ) );
        return this;
    },
});

var PollRouter = Backbone.Router.extend({
    routes : {
        "" : "main",
        "poll/create" : "create",
        "poll/:id" : "poll"
    },
    
    main : function () {
        console.log("PollRouter.main");
        pollCollectionView.render();
    },
    
    create : function () {
        console.log("PollRouter.create");
        new CreatePollView();
    },
    
    poll : function( id ) {
        console.log("PollRouter.poll")
        new PollView( { collection: polls, id: id } );
    }
});

var Polls = Backbone.Collection.extend({
    model: Poll,
    url: "/polls"
});

/** END OF FUNCTIONS **/

var polls = new Polls();

var pollCollectionView = new PollCollectionView({
    collection: polls,
    el: $('#content')
});

pollCollectionView.render();

var pollRouter = new PollRouter({
    collection: polls
});

Backbone.history.start();
