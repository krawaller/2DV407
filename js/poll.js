var Poll = Backbone.Model.extend({
    defaults : {
        "id": null,
        "question": "",
        "answers": {},
        "status": false,
        "private": false,
        "date": 1970-01-01
    },
    
    url : function() {
        // Important! It's got to know where to send its REST calls.
        // In this case, POST to '/donuts' and PUT to '/donuts/:id'
        return this.id ? '/polls/' + this.id : '/polls';
    }
});

var PollView = Backbone.View.extend({     
    render : function() {
        this.el.innerHTML = "<a href='#poll/" + this.model.get('id') + "'>" + this.model.get('id') + "</a>";
        return this;
    }
});

var PollCollectionView = Backbone.View.extend({
    initialize : function() {
        var that = this;
        this._pollViews = [];
        
        this.collection.each(function( poll ) {
            that._pollViews.push(new UpdatingPollView({
                model : poll,
                tagName : 'li'
            }));
        });
    },
     
    render : function() {
        var that = this;
        $(this.el).empty();
        
        _(this._pollViews).each(function( pollView ) {
            $(that.el).append(pollView.render().el);
        });
    }
});

var UpdatingPollView = PollView.extend({
    initialize : function( options ) {
        this.render = _.bind(this.render, this); 
 
        this.model.bind('change:question', this.render);
    }
});

var PollRouter = Backbone.Router.extend({
    routes : {
        "poll/:id" : "poll"
    },
 
    poll : function( id ) {
        console.log(polls.get(id).get('question'));
    }
});

var Polls = Backbone.Collection.extend({
    model: Poll,
    url: "/polls"
});

var polls = new Polls([
    { "id": 1, "question": "Wich came first the chicken or the egg?", "answers": {}, "status": true, "private": false, "date": 2012-02-10 },
    { "id": 2, "question": "Was the shovel a groundbreaking invention?", "answers": {}, "status": true, "private": false, "date": 2012-02-10 }
]);

var pollCollectionView = new PollCollectionView({
    collection: polls,
    el: $('ul.polls')[0]
});

pollCollectionView.render();

var updatingPollView = new UpdatingPollView({
    model: polls
});

var renderedPoll = updatingPollView.render().el;

var pollRouter = new PollRouter({
    collection: polls
});
Backbone.history.start();
