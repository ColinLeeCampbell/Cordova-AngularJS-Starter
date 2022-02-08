
exports.setup = function () {
    this.input('state');
    this.output('output');
};

exports.initialize = function () {
    
    this.addInputHandler('state', function () {
        this.send('output', this.get('state')); 
    });
    
};

exports.fire = function () {
    //this.send('message','MainAccessor.fire() invoked.');

};