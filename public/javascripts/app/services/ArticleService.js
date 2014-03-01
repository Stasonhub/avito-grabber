app.service('ArticleService', ['$http', function ($http) {
  return {
    getList: function (filter, pageNumber) {
      return $http.get(jsRoutes.controllers.Article.list(pageNumber).url, {params: {query:filter.query, priceMin:filter.priceMin, priceMax:filter.priceMax}}).then(function (response) {
        return response.data;
      });
    }
  }
}]);