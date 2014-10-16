Clearcode Boolean filters
=========

Filters than changes boolean true / false and undefined values.

Installation
--------------
```  bower install clearcodeangularjs/cc-bool-filters --save ```


Usage
------

Add ``` cc.bool.filters ``` module to your app module list :


```
angular
    .module('yourAwesomeApp', [
        'cc.bool.filters'
    ]);
```
and you are ready to go!

Filters :

*replaceUndefined*

```
booleanFilter(value, 'true replace', 'replace false');

\\ OR in html

booleanFilter:true :false



```

*booleanFilter*

```
replaceUndefined(value, replacer);

OR

replaceUndefined:replacer


```

Author
------

Roman Sek


License
----

LGPL

