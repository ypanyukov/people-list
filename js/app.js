angular.module('peopleList', ['peopleSearchFilter', 'peopleServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/users/:pageId/:limit', {templateUrl: 'templates/people-list.html',   controller: PeopleListCtrl}).
      when('/users/search/:type/:value/', {templateUrl: 'templates/people-list.html', controller: PeopleListCtrl}).
      when('/users', {templateUrl: 'templates/people-list.html',   controller: PeopleListCtrl}).
      when('/user/:userId', {templateUrl: 'templates/people-detail.html', controller: PeopleDetailCtrl}).
      otherwise({redirectTo: '/users'});
}]);