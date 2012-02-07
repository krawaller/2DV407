var Poll = Backbone.Model.extend({
    defaults: {
        "id":       null,
        "question": "",
        "answers":  {},
        "status":   false,
        "private":  false,
        "date":     ""
    },
    
    validate: function(attribs){
        if(attribs.question === ""){
            return "You must enter a question.";
        }
    },
    
    initialize: function(){
        console.log('Poll model initialized');
    
        this.bind('change:question', function(){
            var question = this.get("question");
            console.log('Question has been changed to ' + question);
        });
        
        this.bind("error", function(model, error){
            console.log(error);
        });
    }
});

var PollCollection = Backbone.Collection.extend({
    model: Poll
});

//Testing creating new poll and change it
var poll = new Poll({ question: "derp?" });
console.log(poll.toJSON());
poll.set({ id: 1, question: "herp?" });
console.log(poll.toJSON());

//Testing validation on poll
var poll2 = new Poll();
poll2.set({ id: 2 });
poll2.set({ id: 2, question: "f7u12?" });

//Testing collections and events
var pollCollection = new PollCollection();
pollCollection.bind("add", function(poll) {
  console.log("Added the question: " + poll.get('question'));
});

pollCollection.add(poll);
pollCollection.add(poll2);

console.log(pollCollection.get(1));
console.log(pollCollection.get(2));