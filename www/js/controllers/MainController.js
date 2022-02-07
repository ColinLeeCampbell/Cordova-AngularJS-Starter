
'use strict';

angular.module('App')
  .controller('MainController', function ($scope) {

    var MainAccessor = instantiate('MainAccessor', 'MainAccessor');
    MainAccessor.initialize();
    MainAccessor.provideInput('state', 1);
    MainAccessor.react();
    $scope.message = MainAccessor.latestOutput('output');
  });