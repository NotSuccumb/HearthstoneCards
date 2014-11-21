angular.module('hsApp', [])
    .controller('hsCtrl', ['$scope', '$http', function($scope, $http){
        $http.get('scripts/all-collectebles.json').success(function(data){
            $scope.cards = data;
        });

        $scope.heroes = [ "druid", "hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior"];
        $scope.selectedHero = {"index": 0};

        $scope.costs = ["0","1","2","3","4","5","6","7+"];
        $scope.selectedCost = -1;

        $scope.cardCostFilter = function(item){
            var highestСost = $scope.costs.length - 1;
            if($scope.selectedCost < 0){
                return true;
            } else if($scope.selectedCost < highestСost){
                return item.mana == $scope.selectedCost;
            } else return item.mana >= highestСost;
        };
    }]);