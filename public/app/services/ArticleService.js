app.service('ArticleService', ['$http', function ($http) {

  function encode(unencoded) {
    return encodeURIComponent(unencoded).replace(/'/g, "%27").replace(/"/g, "%22");
  }

  return {
    getList: function (filter, pageNumber) {
      return $http.get(jsRoutes.controllers.Article.list(pageNumber).url, {params: {query: encode(filter.query), priceMin: filter.priceMin, priceMax: filter.priceMax, region: filter.region}}).then(function (response) {
        return response.data;
      });
    }
  }
}]);