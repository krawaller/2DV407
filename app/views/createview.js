define([
        'Backbone',
        'Underscore',
        'jQuery',
        'PollListentryView'
    ],
    
    function ( Backbone, _, $, BaseView ){

        CreateView = BaseView.extend({
            initialize: function ( options ) {
                console.log("CreateView.initialize");
                this.template = _.template( $("#create-poll").html() );
                _.bindAll(this, 'render', 'addAll', 'addOne');
                this.collection.bind('add', this.addOne);
            },
    
            events: {
                "click .add-answer": "addAnswer",
                "click .create-poll-btn": "createPoll"
            },
            
            addAll: function() {
                this.collection.each( this.addOne) ;
            },
            
            addOne: function( model ) {
                view = new PollListentryView( { model: model } );
                view.render();
                this.$("#polls").append( view.el );
                model.save();
            },
    
            addAnswer: function ( event ) {
                console.log("NotYetImplemented");
            },
            
            createPoll: function ( event ) {
                alert("createPoll");
                this.collection.add( new PollModel( { question: this.$("#question").val() }) );
            },
            
            render: function () {
                $(this.el).html( this.template() );
            }
        });

        return CreateView;
    }
);