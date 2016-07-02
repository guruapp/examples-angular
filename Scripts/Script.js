var myApp = angular
    .module("myModule",[])
    .controller("myController", function ($scope){
      $scope.technologies = [
          {name:"C#", likes:0, dislikes:0 },
          {name:"ASP.net", likes:0, dislikes:0 },
          {name:"SQL server", likes:0, dislikes:0 },
          {name:"angularJS", likes:0, dislikes:0 }

      ];
        $scope.incrementLikes = function(technology)
        {
            technology.likes ++;
        }
        $scope.incrementDislikes = function(technology)
        {
            technology.likes --;
        }

    });

