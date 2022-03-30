# ContentBlocker
A Vanilla JS package to check user input
# Installation
```
npm i @sparkedscience/content-blocker
```
# Usage
```
import ContentBlocker from '@sparkedscience/content-blocker';

// Object creation
let cb = new ContentBlocker("en");

//Check if the input is valid
cb.check(input); // Returns a boolean. True is valid, false is invalid.
```
Currently, the following languages are supported: English (en), Spanish (es), Italian (it), and Indonesian (id).

# NPM Script
```
npm run demo
```
This is the only script right now. It will open a new tab with a demo.