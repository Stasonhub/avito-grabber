(function(app){
  NavController.$inject = ['$scope', '$state'];
  function NavController($scope, $state){
    $scope.vm = this;
    $scope.url = $state.href;
    var u = $state.href('bc.home');
  }

  app.controller('NavController', NavController);
  return NavController;
}(app));