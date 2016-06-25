var myApp = angular
    .module("myModule",[])
    .controller("myController", function ($scope){
      $scope.employes = [
          {firstName:"Ben", lastName: "Lev", gender:"male",salary:55567},
          {firstName:"Olya", lastName: "Kaza", gender:"female",salary:1155567},
          {firstName:"Ben", lastName: "Lev", gender:"male",salary:23567},
          {firstName:"Ben", lastName: "Lev", gender:"male",salary:345567}
      ]

    });

