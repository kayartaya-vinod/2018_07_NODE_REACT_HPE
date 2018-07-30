function hello () {
    console.log('Hello, World!');
}
console.log('from inside of myfunctions.js');

module.exports.hello = hello;
module.exports.somenum = 100;

module.exports.sleep = function(duration) {
    let ms1 = Date.now();
    while((Date.now()-ms1)<=duration) ;
}

module.exports.executeAfterDelay = function (callback, duration) {
    sleep(duration);
    callback();
}
