var PeopleListCtrl = function($scope, $http) {
    $http.get('data.json').success(function(data) {
        if (data.result)
            $scope.data = data;
            
        $scope.predicate = "sort";
        $scope.peoplePredicate = "age";
        $scope.reversed = true;
    });
    
    $scope.peopleOrderBy = function(val, sort){
        $scope.peoplePredicate = val;
        $scope.reversed = sort;
    };
};

var PeopleDetailCtrl = function($scope, $routeParams, $http, $location){
    var find = false;
    
    $http.get('data.json').success(function(data) {
        data.result.forEach(function(item){
            if (item.id == $routeParams.userId){
                find = true;
                $scope.data = item;
                
                $scope.detailCols = data.detailCols;
                $scope.detailColsPredicate = "sort";
            }
        });
        
        if (!find)
            $location.path('/users');
    });
};