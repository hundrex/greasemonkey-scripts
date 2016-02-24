// ==UserScript==
// @name        StudyBlue Improvements
// @namespace   http://www.samueltaylor.org/
// @description Removes blur from StudyBlue notecards, removes ads
// @include     https://www.studyblue.com/*
// @version     1.0
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       GM_addStyle
// ==/UserScript==

waitForKeyElements(".blur", removeBlur);
waitForKeyElements(".card-ad", removeAds);

function removeBlur(jNode) {
    jNode.removeClass("blur");
    $(".text-small").css('color', '');
}

function removeAds(jNode) {
    jNode.remove();
}
