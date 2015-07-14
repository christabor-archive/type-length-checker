[![MIT Badge](http://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/christabor/type-length-checker/master/LICENSE)

type-length-checker
===================

This plugin allows you to inspect the "characters per line" of a given element, and determine if it's between the most readable range of 50 to 80 characters. It will highlight different colors depending on how far each element deviates from that range.


### How to use

```
// Cache your elements, and then call the plugin on them.
// As demonstrated in the init code, 
// you can also bind it to the window resize event, and test out various sizing on the fly.

var elems = $('#workspace').find('p, h1, h2, h3, h4, h5, h6, ul, ol');
elems.typeLengthChecker();

$(window).on('resize', function(e){
elems.typeLengthChecker();
```

### Example screenshots

![Screenshot 1](https://raw.github.com/christabor/type-length-checker/master/example-1.png "Screenshot 1")
![Screenshot 2](https://raw.github.com/christabor/type-length-checker/master/example-2.png "Screenshot 2")
![Screenshot 3](https://raw.github.com/christabor/type-length-checker/master/example-3.png "Screenshot 3")
