// ==UserScript==
// @name        Yummly Interstitial Remover
// @namespace   http://www.samueltaylor.org/
// @description Removes big pop up on Yummly
// @include     https://www.yummly.com/*
// @include     http://www.yummly.com/*
// @version     1.0
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       GM_addStyle
// ==/UserScript==

waitForKeyElements ("#onboarding-prefs", actionFunction);

function actionFunction (jNode) {
    jNode.remove();
}
