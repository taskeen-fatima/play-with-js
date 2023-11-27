var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var plScope, plHoisting;
    var vIdScope ='CNk33k5nScg';
    var vIdHosting ='_FmHfOqJ4SY';
    var sw =0;

var btnScope = document.getElementById("scope");
btnScope.onclick = function(){
    sw = 0;
    
}

var btnHost = document.getElementById("hoisting");
btnHost.onclick = function()
{
    
    sw = 1;
    
    
}



function onYouTubeIframeAPIReady() {

    plScope = new YT.Player('info', {
        height: '250',
        width: '400',
        margin: '50',
        videoId: vIdScope,
        playerVars: {
          'playsinline': 1
        },
        events: {
          'onReady': onPlayerReady,
          //'onStateChange': onPlayerStateChange
        }
      });
      plHoisting = new YT.Player('info', {
        height: '250',
        width: '400',
        margin: '50',
        videoId: vIdHosting,
        playerVars: {
          'playsinline': 1
        },
        events: {
          'onReady': onPlayerReady,
          //'onStateChange': onPlayerStateChange
        }
      });
}
  function onPlayerReady()
  {
    switch(sw)
    {
      case 0: plScope.playVideo();
      break;
      case 1: plHoisting.playVideo(); 
    }
  }
  
  
    

