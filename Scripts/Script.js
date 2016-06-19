var myApp = angular
    .module("myModule",[])
    .controller("myController", function ($scope){
      $scope.employe =
      {
          firstName: "Vadim",
          lastName: "Leviev",
          gender: "male"
      }
        $scope.message ="Hello angular";
    });

