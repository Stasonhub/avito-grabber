(function(app){
  NavController.$inject = ['$scope', '$state', '$stateParams'];
  function NavController($scope, $state, $stateParams){
    $scope.vm = this;
    $scope.url = $state.href;
    this.$stateParams = $stateParams;
  }

  NavController.prototype = {
    clearForm: function(){
      delete this.$stateParams.query;
    }
  }
  app.controller('NavController', NavController);
  return NavController;
}(app));