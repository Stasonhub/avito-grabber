var app = angular.module('avitoApp', ['ngRoute', 'ui.router']);
function vs(url){
  return '/assets/javascripts/app' + url;
}
app.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('bc',{
    templateUrl: vs('/views/with-breadcrumb.html'),
    controller: 'BreadcrumbController'
  }).state('bc.home', {
    url: '',
    templateUrl: vs('/views/search-form.html'),
    controller: 'FilterFormController',
    breadcrumbs: [{
      title: 'Поиск',
      state: 'bc.home',
      isActive: true
    }]
  }).state('bc.articleList', {
    url: '/list?query&priceMin&priceMax',
    templateUrl: vs('/views/article/article-list.html'),
    controller: 'ArticleListController',
    breadcrumbs: [{
      title: 'Поиск',
      state: 'bc.home',
      isActive: false
    }, {
      title: 'Список предложений',
      state: 'bc.articleList',
      isActive: true
    }]
  });
}]);

