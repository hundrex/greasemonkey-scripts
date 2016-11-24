// ==UserScript==
// @name        Pocket Feed Ad Remover
// @namespace   http://www.samueltaylor.org/
// @description Removes feed ads on Pocket
// @include     https://getpocket.com/a/queue/list/
// @include     http://getpocket.com/a/queue/list/
// @version     1.1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       GM_addStyle
// ==/UserScript==

waitForKeyElements(".item_type_spoc", actionFunction, false);

function actionFunction(jNode) {
    jNode.remove();
}
