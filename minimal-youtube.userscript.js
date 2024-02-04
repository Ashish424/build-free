// ==UserScript==
// @name        minimal-youtube
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 21/01/2024, 15:53:30
// @run-at       document-start
// ==/UserScript==



const visible_path = ['subscriptions', 'library', 'history', 'videos', 'playlist', 'results', 'channel', '/c/', 'user'];

function is_visible(path){


  for(let i = 0;i<visible_path.length;++i){

    if (path.search(visible_path[i])!==-1){
      return true;

    }

  }
  return false;

}

function hide_elements(selector){
    //console.log("hide selector called with "+selector);
    const elements = document.querySelectorAll(selector);
    elements.forEach((el)=>{el.style.cssText+='display: none!important;'});

    return elements.length;

}

function inspector(){
  // console.log('inspector here');

  const curr_path = window.location.pathname;
  if(!is_visible(curr_path)){

    hide_elements('#video-title');
    hide_elements('ytd-thumbnail');
    hide_elements('ytd-video-meta-block');
    
    // testing different selectors
    // hide_elements('ytd-video-meta-block');
    // hide_elements('#contents.style-scope.ytd-rich-grid-renderer');
    // hide_elements('yt-formatted-string#video-title');

  }






}
const interval = setInterval(inspector , 300);


