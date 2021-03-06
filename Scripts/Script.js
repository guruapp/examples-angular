var myApp = angular
    .module("myModule",[])
    .controller("myController", ["$scope", function ($scope){
      $scope.employees = [
          {name:"Ben",dateOfBirth: new Date("November 23,1980"), gender:"Male",salary:5500.788},
          {name:"Sara",dateOfBirth: new Date("May 05,1970"), gender:"Female",salary:68000},
          {name:"Mark",dateOfBirth: new Date("August 14,1974"), gender:"Male",salary:1500.788},
          {name:"Pam",dateOfBirth: new Date("November 23,1980"), gender:"Male",salary:2500.788},
          {name:"Todd",dateOfBirth: new Date("November 23,1980"), gender:"Male",salary:1200.788}
      ];

      $scope.rawLimit = 5;
      $scope.sortColumn = "name";
      $scope.reverseSort = false;
      $scope.sortData = function (column)
      {
          $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
          $scope.sortColumn = column;
      }
      $scope.getSortClass = function (column)
      {
      if($scope.sortColumn == column)
      {
          return $scope.reverseSort ? 'arrow-down' : 'arrow-up' ;
      }
          return '';

      }

      // search only name and

        $scope.search = function (item)
        {
            if($scope.searchText == undefined)
            {
                return true;
            }
            else
            {
                if(item.name.toLowerCase().lastIndexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.gender.toLowerCase().lastIndexOf($scope.searchText.toLowerCase()) != -1 )
                {
                    return true;
                }

            }
            return false;
        }


    }]);










