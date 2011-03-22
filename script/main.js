// init z-index for sections
// the later they come, the lower the z-index

var allSections = $('section');

for (var i = 0; i < allSections.length; i++) {

  allSections.get(i).style.zIndex = allSections.length - i;

}

// init navigation buttons

var slideHistory = [];

$('.next').click(function() {

  var currentSlide = $(this).parents('section').filter(':first');

  currentSlide.animate({
      left: '-=1900'
    }, 700, 'easeInBack');
    
  slideHistory.push(currentSlide);
  
});

$('.prev').click(function() {

  var lastSlide = slideHistory[slideHistory.length - 1];
  
  if (lastSlide) {
  
    lastSlide.animate({
        left: '+=1900'
      }, 700, 'easeInOutExpo');
      
    slideHistory.pop();
    
  }
  
});

// Canvas 2D

var canvas = document.getElementById('canvas-example');

if (canvas && canvas.getContext) {

  var ctx = canvas.getContext('2d');
  
  // draw background
  ctx.fillStyle = '#FD0';
  ctx.fillRect(0,0,75,75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(75,0,75,75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(0,75,75,75);
  ctx.fillStyle = '#F30';
  ctx.fillRect(75,75,150,150);
  ctx.fillStyle = '#FFF';
 
  // set transparency value
  ctx.globalAlpha = 0.2;
 
  // Draw semi transparent circles
  for (var i=0;i<7;i++){
      ctx.beginPath();
      ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
      ctx.fill();
  }
 
}

// audio player

var audio_player = document.getElementById("aplayer");

function audioPlayerUpdate() {

  if (audio_player) {

    var dur = audio_player.duration;
    var time = audio_player.currentTime;
    var fraction = time/dur;
    var percent = (fraction*100);
    var wrapper = document.getElementById("audio-duration");
    var new_width = wrapper.offsetWidth * fraction;
    
    document.getElementById("audio-duration-bar").style.width = new_width + "px";
  
  }

}

function playAudio() {

  //get the state of the player
  
  if (audio_player && audio_player.paused) {
  
    audio_player.play();
    document.getElementById('audio-player-control').innerHTML = 'Stop';
    
  } else {
  
    audio_player.pause();
    document.getElementById('audio-player-control').innerHTML = 'Play';
    
  }
  
}

function audioTrackEnded() {

  document.getElementById("audio-play").value=">";
  
}

// video player

var video_player = document.getElementById("vplayer");

function videoPlayerUpdate() {

  if (video_player) {

    var dur = video_player.duration;
    var time = video_player.currentTime;
    var fraction = time/dur;
    var percent = (fraction*100);
    var wrapper = document.getElementById("video-duration");
    var new_width = wrapper.offsetWidth * fraction;
    
    document.getElementById("video-duration-bar").style.width = new_width + "px";
  
  }

}

function playVideo() {

  //get the state of the player
  
  if (video_player && video_player.paused) {
  
    video_player.play();
    document.getElementById('video-player-control').innerHTML = '| |';
    
  } else {
  
    video_player.pause();
    document.getElementById('video-player-control').innerHTML = '>';
    
  }
  
}

function videoTrackEnded() {

  document.getElementById("video-play").value=">";
  
}
