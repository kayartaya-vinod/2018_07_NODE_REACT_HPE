describe('test suite name', function(){

    before(function() {
        console.info('from inside before');
    });    
    
    beforeEach(function() {
        console.info('from inside beforeEach');
    });
    
    afterEach(function() {
        console.info('from inside afterEach');
    });

    after(function() {
        console.info('from inside after');
    });

    it('test case 1', function(){
        console.info('test case 1');
    });

    it('test case 2', function(){
        console.info('test case 2');
    });
    it('test case 3', function(){
        console.info('test case 3');
    });
});