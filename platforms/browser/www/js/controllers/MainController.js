
'use strict';

angular.module('App')
  .controller('MainController', function ($scope) {

    var MainAccessor = instantiate('MainAccessor', 'MainAccessor');
    MainAccessor.initialize();
    $scope.message= MainAccessor.get('name') + '\ninitialized : '+  MainAccessor.initialized;
  });