var myApp = angular
    .module("myModule",[])
    .controller("myController", function ($scope){
      $scope.countryes = [
          {
              name: "UK",
              city: [{name: "new yourk"}, {name: "san francisko"}],
          },
          {
              name:"Russia",
              city:[{name:"Moscow"}]
          }

      ]

    });

