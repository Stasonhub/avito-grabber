(function(app){
  FilterFormController.$inject = ['$scope', '$state', '$stateParams'];
  function FilterFormController($scope, $state, $stateParams){
    $scope.vm = this;
    this.$state = $state;
    this.filter = $stateParams;
  }

  FilterFormController.prototype = {
    search: function(){
      this.$state.go('articleList', this.filter);
    },
    clearForm: function(){
      this.filter = {};
    }
  };

  app.controller('FilterFormController', FilterFormController);
  return FilterFormController;
}(app));