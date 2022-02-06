exports.setup = function () {
    this.input('name');
    this.output('greeting');
};
exports.initialize = function () {
    this.setDefault('name','Main Accessor');
    this.addInputHandler('name', function () {
        this.send('greeting', 'Hello World, ' + this.get('name')); 
    });
    
};