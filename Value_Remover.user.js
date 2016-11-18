// ==UserScript==
// @name        Value Remover
// @namespace   http://www.samueltaylor.org/
// @description Removes search ads from L'Occitane's website
// @include     http://usa.loccitane.com/*
// @version     0.9
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       GM_addStyle
// ==/UserScript==

waitForKeyElements(".productValue", actionFunction);

function actionFunction(jNode) {
    jNode.remove();
}
