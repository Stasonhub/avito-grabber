var app = angular.module('avitoApp', ['ngRoute', 'ui.router']);
function vs(url){
  return '/assets/app' + url;
}
app.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('startPage', {
    url: '',
    templateUrl: vs('/views/search-form.html'),
    controller: 'FilterFormController',
    breadcrumbs: [{
      title: 'Поиск',
      state: 'home',
      isActive: true
    }]
  }).state('home', {
    url: '/?query&priceMin&priceMax&region',
    templateUrl: vs('/views/search-form.html'),
    controller: 'FilterFormController',
    breadcrumbs: [{
      title: 'Поиск',
      state: 'home',
      isActive: true
    }]
  }).state('articleList', {
    url: '/list?query&priceMin&priceMax&region',
    templateUrl: vs('/views/article/article-list.html'),
    controller: 'ArticleListController',
    breadcrumbs: [{
      title: 'Поиск',
      state: 'home',
      isActive: false
    }, {
      title: 'Список предложений',
      state: 'articleList',
      isActive: true
    }]
  });
}]);

