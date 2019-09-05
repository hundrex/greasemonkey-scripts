// ==UserScript==
// @name        Etsy Ad Remover
// @namespace   http://www.samueltaylor.org/
// @description Removes search ads from Etsy
// @include     https://*.etsy.com/*
// @version     1.1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       GM_addStyle
// ==/UserScript==

waitForKeyElements (".ad-iindicator", actionFunction);

function actionFunction (jNode) {
jNode.parent().parent().parent().parent().parent().parent().parent().remove();
}
