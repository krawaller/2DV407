define([
        'Backbone',
        'Underscore',
        'jQuery'
    ],
    
    function( Backbone, _, $ ){
        PollListentryView = Backbone.View.extend({
            initialize: function(options){
                this.template = _.template("<li>{{question}}</span>");
                options.model.bind('change', this.render, this);
                options.model.bind('destroy', this.remove);
            },
            
            render: function(){
                $(this.el).html( this.template(this.model.toJSON()) );
            }
        });
        
        return PollListentryView;
    }
);