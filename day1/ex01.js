var x = require('./myfunctions');

// import {hello} from './my-es6-module';


console.log('type of x is', typeof x);
console.log('x is', x);
// x.executeAfterDelay(x.hello, 3000);
setTimeout(x.hello, 2000);
x.sleep(6000);
console.log('End of ex01\'s execution');
