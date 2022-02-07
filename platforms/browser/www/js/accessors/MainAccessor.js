exports.setup = function () {
    this.input('state');
    this.output('output');
};
exports.initialize = function () {
    this.setDefault('state', 0);
    this.addInputHandler('state', function () {
        this.send('output', 'Sending state: ' + this.get('state') + ' to device'); 
    });
    
};