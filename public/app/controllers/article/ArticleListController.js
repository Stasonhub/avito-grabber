(function (app) {
  ArticleListController.$inject = ['$scope', 'ArticleService', '$stateParams'];
  function ArticleListController($scope, articleService, $stateParams) {
    $scope.vm = this;
    var filter = $stateParams;
    this.articles = [];
    this.articleService = articleService;
    this.list(filter, 1);
  }

  ArticleListController.prototype = {
    list: function (filter, pageNumber) {
      var that = this;
      this.articleService.getList(filter, pageNumber).then(function (data) {
        that.articles = that.articles.concat(data.articles);
        return data.hasNextPage;
      }).then(function (hasNextPage) {
        if (hasNextPage && that.articles.length < 200) {
          that.list(filter, pageNumber + 1);
        }
      });
    }
  }

  app.controller('ArticleListController', ArticleListController);
  return ArticleListController;
}(app));