// ==UserScript==
// @name        Etsy Ad Remover
// @namespace   http://www.samueltaylor.org/
// @description Removes search ads from Etsy
// @include     https://www.etsy.com/search*
// @version     1.0
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// ==/UserScript==

$(".ad-indicator").parent().remove();
