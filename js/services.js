angular.module('peopleServices', ['ngResource']).
    factory('People', function($resource){
        return $resource('./data.json', {}, {
            query: {method:'GET', isArray:true}
    });
}).
    factory('Cols', function($resource){
        return $resource('./cols-config.json', {}, {
            query: {method:'GET', isArray:false}
    });
});