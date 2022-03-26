function sayHello() {
    alert('Hello world');
}
console.log('Hello world');
import {contentBlocker} from "./src/content-blocker";

let cb = contentBlocker('pancakes', 'en');
console.log(cb);