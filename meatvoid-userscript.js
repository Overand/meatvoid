// ==UserScript==
// @name        Meat Void
// @namespace   https://github.com/overand/meatvoid
// @description Meat Void!
// @include     *
// @version     1
// @grant       none
// ==/UserScript==

console.log("Starting the script...")

function replaceText(selector, text, newText, flags) {  
  var matcher = new RegExp(text, flags);
  console.log("Here's the matcher: " + matcher)
  console.log("Replaced with: "+ newText)
  var elems = document.querySelectorAll(selector), i;

  for (i = 0; i < elems.length; i++)
    if (!elems[i].childNodes.length)
      elems[i].innerHTML = elems[i].innerHTML.replace(matcher, newText);
}

var replacedict = new Object(); // Each "Key" is the new euphemism. The values (arrays) are what is replaced

replacedict['meat void'] = ["vagina", "pussy", "cunt", "vag", "twat", "vajayjay", "va jay jay", "vulva",
                            "coochie", "cooch", "poonany", "poon tang","poon","punany", "axe wound", "cooze",
                            "bearded clam", "moose knuckle", "vadge", "yoni", "cooter", "muff", "warm center",
                            "wet center", "chachi", "muffin", "princess parts", "meat curtains", "beef curtains",
                            "snatch", "hoo-ha", "hoo ha", "box", "tang", "poon tang", 
                            // These are optional
                            "clit", "clitoris", "labia", "birth canal", "uterus", "cervix"]

var els = document.getElementsByTagName("*");

for (var replacement in replacedict) {
  for (var ireplaceword in replacedict[replacement]) {
    replaceme = replacedict[replacement][ireplaceword]
//    replaceText('*', replaceme, replacement, 'g')
    //console.log("Replacing: [" + replaceme + "]   With: [" + replacement + ']')
    //var matcher = '/'+replaceme+'/gi' // The actual source.
    var matcher = new RegExp(replaceme, 'g');
     for(var i = 0, l = els.length; i < l; i++) {
      var el = els[i];
      el.innerHTML = el.innerHTML.replace(matcher, replacement);
    } 
    
  }
} 