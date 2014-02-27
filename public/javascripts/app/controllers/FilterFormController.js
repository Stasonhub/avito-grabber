(function(app){
  FilterFormController.$inject = ['$scope', '$state'];
  function FilterFormController($scope, $state){
    $scope.vm = this;
    this.$state = $state;
    this.filter = {
      query: 'Цифровое пианино',
      priceMin: 10000,
      priceMax: 50000
    };
  }

  FilterFormController.prototype = {
    search: function(){
      this.$state.go('articleList', this.filter);
    }
  };

  app.controller('FilterFormController', FilterFormController);
  return FilterFormController;
}(app));