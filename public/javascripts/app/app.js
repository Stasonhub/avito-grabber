var app = angular.module('avitoApp', ['ngRoute', 'ui.router']);
function vs(url){
  return '/assets/javascripts/app' + url;
}
app.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('home', {
    url: '',
    templateUrl: vs('/views/search-form.html'),
    controller: 'FilterFormController'
  }).state('articleList', {
    url: '/list?query&priceMin&priceMax',
    templateUrl: vs('/views/article/article-list.html'),
    controller: 'ArticleListController'
  });
}]);

