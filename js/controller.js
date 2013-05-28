var PeopleListCtrl = function($scope, $routeParams, People, Cols, $http) {
    
    $scope.data = People.query();
    $scope.cols = Cols.query();
    
    $scope.peoplePredicate = "age";
    $scope.reversed = true;
    $scope.predicate = "sort";
    
   
     $scope.isSearch = $routeParams.type ? true : false;
    
    $scope.peopleOrderBy = function(val, sort){
        $scope.peoplePredicate = val;
        $scope.reversed = sort;
    };
};

var PeopleDetailCtrl = function($scope, $routeParams, People, Cols, $location){
    var find = false;
    
    People.query(function(data) {
        data.forEach(function(item){
            if (item.id == $routeParams.userId){
                find = true;
                $scope.data = item;
            }
        });
        
        if (!find)
            $location.path('/users');
    });
        
    Cols.query(function(data){
        $scope.detailCols = data.detailCols;
    });
    
    $scope.detailColsPredicate = "sort";
};