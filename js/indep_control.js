$( document ).ready(function() { 

  var wheel=$('#wheel');
  var wheelBox = $('#wheelbox');
  var deg = 0;
  var playingWidth =$(window).width();
  
  var defA=2;
  var wheelRadius = parseInt(wheel.css('height')) / 2;
  var defD=5;//Math.PI * defA / 180 * wheelRadius;
  
 var move_left=false;
 var move_right=false;
 var rotateClock=false;
 var rotateAntiClock=false;
 var gameOver = false;
 var move = 1;

   $('.s1').css("height",$(window).height()/3);
   $('.s2').css("height",$(window).height()/3);
   $('.s3').css("height",$(window).height()/3);
   $('#wheel').css('height',$(window).height()/3-2);
   $('#wheel').css('width',$(window).height()/3-2);
   $('#wheelbox').css('height',$(window).height()/3-2);
   $('#wheelbox').css('width',$(window).height()/3-2);
   $('img1').css('height',$(window).height()/3-2);
   
    rotateClock=requestAnimationFrame(clockwise);
    console.log(parseInt(wheel.css('left')));
    
      $('.s11').html('    स्वतंत्रता दिवस की शुभकामनाएं  ')
      $('.s31').html('    Happy independance Day   ')
    



  function left(){
    if (gameOver == false &&  ((parseInt(wheelBox.css('left'))) >5)){
      wheelBox.css('left', parseInt(wheelBox.css('left'))- defD)
      move_left=requestAnimationFrame(left);
    }
    
  }

  function right(){

    if (gameOver == false &&  ((parseInt(wheelBox.css('left'))) < (playingWidth-(wheelRadius*4)-5))){
      wheelBox.css('left', parseInt(wheelBox.css('left'))+ defD)
      move_right=requestAnimationFrame(right);
    }
    
    
  }

  function clockwise(){
    deg+= defA ;
    if(deg>359){
      deg=0;
    }
   // console.log(deg);
    var wheel = document.getElementById('wheel');
    wheel.style.webkitTransform = 'rotate('+deg+'deg)'; 
    wheel.style.mozTransform    = 'rotate('+deg+'deg)'; 
    wheel.style.msTransform     = 'rotate('+deg+'deg)'; 
    wheel.style.oTransform      = 'rotate('+deg+'deg)'; 
    wheel.style.transform       = 'rotate('+deg+'deg)'; 
    rotateClock=requestAnimationFrame(clockwise);
    
  }

  function AntiClockwise(){
    deg-= defA;
    if(deg<0){
      deg=359;
    }
    var wheel = document.getElementById('wheel');
    wheel.style.webkitTransform = 'rotate('+deg+'deg)'; 
    wheel.style.mozTransform    = 'rotate('+deg+'deg)'; 
    wheel.style.msTransform     = 'rotate('+deg+'deg)'; 
    wheel.style.oTransform      = 'rotate('+deg+'deg)'; 
    wheel.style.transform       = 'rotate('+deg+'deg)'; 
    rotateAntiClock=requestAnimationFrame(AntiClockwise);
    
  }

  
 

});