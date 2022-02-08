
'use strict';

angular.module('App')
  .controller('MainController', function ($scope) {

    var topLevel = instantiateAccessor('MyTopLevel', 'Swarmlet', getAccessorCode);
    topLevel.initialize();

    
    var DataCollection = topLevel.containedAccessors[0];

    DataCollection.provideInput('state', 1);
    DataCollection.react();
  
    $scope.message = DataCollection.latestOutput('output');
  });