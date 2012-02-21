define(['Backbone', 'Underscore', 'jQuery', 'BaseView'],
    function ( Backbone, _, $, BaseView ){

        MainView = BaseView.extend({
            initialize: function ( options ) {
                this.template = _.template( $("#index").html() );
            },
            
            render: function () {
                $(this.el).html( this.template() );
            }
        });

        return MainView;
    }
);