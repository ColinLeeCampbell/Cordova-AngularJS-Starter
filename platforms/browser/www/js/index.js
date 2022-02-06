'use strict';

var cordova = {
    // Register an event handler that is invoked when the device is ready.
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // Start swarmlet when the device is ready.
    onDeviceReady: function() {
        console.log('device ready');
        angular.bootstrap(document, ['App']);
    },
};

cordova.initialize();