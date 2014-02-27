(function (app) {
  BreadcrumbController.$inject = ['$scope', '$$state', '$state'];

  function BreadcrumbController($scope, $$state, $state) {
    $scope.vm = this;
    var that = this;
    $scope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams) {
          that.breadcrumbs = $state.current.breadcrumbs;
        });
  }

  app.controller('BreadcrumbController', BreadcrumbController);
  return BreadcrumbController;
}(app));