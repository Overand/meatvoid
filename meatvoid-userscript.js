// ==UserScript==
// @name        Meat Void
// @namespace   https://github.com/overand/meatvoid
// @description Meat Void!
// @include     *
// @version     1
// @grant       none
// ==/UserScript==

var replacedict = new Object(); // Each "Key" is the new euphemism. The values (arrays) are what is replaced

replacedict['meat void'] = ["vagina", "pussy", "cunt", "vag", "twat", "vajayjay", "va jay jay", "vulva",
                            "coochie", "cooch", "poonany", "poon tang","poon","punany", "axe wound", "cooze",
                            "bearded clam", "moose knuckle", "vadge", "yoni", "cooter", "muff", "warm center",
                            "wet center", "chachi", "muffin", "princess parts", "meat curtains", "beef curtains",
                            "snatch", "hoo-ha", "hoo ha", "box", "tang", "poon tang", 
                            // These are optional
                            "clit", "clitoris", "labia", "birth canal", "uterus", "cervix"]

var els = document.getElementsByTagName("*");

for (var dictkey in replacedict) {
  for (var replaceword in replacedict[dictkey]) {
    var matcher = '/'+dictkey+'/gi' //The actual source.    
    for(var i = 0, l = els.length; i < l; i++) {
      var el = els[i];
      el.innerHTML = el.innerHTML.replace(matcher, replaceword);
    }
  }
}