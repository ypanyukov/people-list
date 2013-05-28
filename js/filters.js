angular.module('peopleSearchFilter', []).filter('search', function($routeParams) {
    return function(input) {
        var result = [];
        if ($routeParams.type && input){
            input.forEach(function(item){
                if (item[$routeParams.type] == $routeParams.value)
                   result.push(item); 
            });
            return result;
        }
        else
            return input;
    };
})