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
