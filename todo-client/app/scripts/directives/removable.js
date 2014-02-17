'use strict';

angular.module('todosApp')
  .directive("removeWithFade", function() {
    return function(scope, element, attrs) {
        var time = scope.$eval(attrs.removeWithFade);
        element.bind('click', function() {
            console.log('our directive is firing.');
            $(element).parent().parent().fadeOut(time);
        });
    };
});
