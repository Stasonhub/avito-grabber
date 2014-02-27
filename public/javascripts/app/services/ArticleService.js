app.service('ArticleService', ['$http', function ($http) {
  return {
    getList: function (filter, pageNumber) {
      return $http(jsRoutes.controllers.Article.list(pageNumber, filter.query)).then(function (response) {
        return response.data;
      });
    }
  }
}]);