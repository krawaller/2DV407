define(['Backbone', 'Underscore', 'jQuery'],
    function ( Backbone, _, $ ) {

        BaseView = Backbone.View.extend({            
            unrender: function () {
                $(this.el).detach();
            }
        });
    
        return BaseView;
    }
);