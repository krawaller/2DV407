define([
        'order!assets/js/lib/underscore'
    ],
    
    function( x ) {
        _.templateSettings = {
          interpolate : /\{\{(.+?)\}\}/g
        };
        return _;
    }
);