var app = angular.module('avitoApp', ['ngRoute']);
app.controller('ArticleController', ['$scope', 'ArticleService', function ($scope, articleService) {
        $scope.filter = {};
        $scope.filter.query = 'цифровое пианино';
        $scope.articles = [];
        $scope.search = function (pageNumber) {
            articleService.getList($scope.filter, pageNumber).then(function (data) {
                $scope.articles = $scope.articles.concat(data.articles);
                return data.hasNextPage;
            }).then(function(hasNextPage){
                if (hasNextPage && pageNumber < 200) {
                    $scope.search(pageNumber + 1);
                }
            });
        };
        $scope.clearAndSearch = function(pageNumber){
            $scope.articles = [];
            $scope.search(pageNumber);
        }

    }]).service('ArticleService', ['$http', function ($http) {
        return {
            getList: function (filter, pageNumber) {
                return $http(jsRoutes.controllers.Article.list(pageNumber, filter.query)).then(function (response) {
                    return response.data;
                });
            }
        }
    }]);
