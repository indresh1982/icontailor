jssor_slider_starter = function (containerId) {
  var _SlideshowTransitions = [
    {$Idle:2000,$Duration:1800,x:1,$Delay:30,$Cols:10,$Rows:5,$Clip:15,$During:{$Left:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$JssorEasing$.$EaseInOutExpo,$Clip:$JssorEasing$.$EaseInOutQuad},$Outside:true,$Round:{$Top:0.8}},
    {$Idle:2000,$Duration:1800,x:1,$Delay:30,$Cols:10,$Rows:5,$Clip:15,$During:{$Left:[0.3,0.7]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$JssorEasing$.$EaseInOutExpo,$Clip:$JssorEasing$.$EaseInOutQuad},$Outside:true,$Round:{$Top:0.8}},
    {$Idle:2000,$Duration:1000,x:0.2,$Delay:40,$Cols:12,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$JssorEasing$.$EaseInOutExpo,$Opacity:$JssorEasing$.$EaseInOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5}},
    {$Idle:2000,$Duration:1000,x:-0.2,$Delay:40,$Cols:12,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:260,$Easing:{$Left:$JssorEasing$.$EaseInOutExpo,$Opacity:$JssorEasing$.$EaseInOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5}},
    {$Idle:2000,$Duration:2000,y:-1,$Delay:60,$Cols:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:$JssorEasing$.$EaseOutJump,$Round:{$Top:1.5}},
    {$Idle:2000,$Duration:1800,x:1,y:0.2,$Delay:30,$Cols:10,$Rows:5,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:{$Left:$JssorEasing$.$EaseInOutSine,$Top:$JssorEasing$.$EaseOutWave,$Clip:$JssorEasing$.$EaseInOutQuad},$Outside:true,$Round:{$Top:1.3}},
    {$Idle:2000,$Duration:1800,x:1,y:0.2,$Delay:30,$Cols:10,$Rows:5,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2050,$Easing:{$Left:$JssorEasing$.$EaseInOutSine,$Top:$JssorEasing$.$EaseOutWave,$Clip:$JssorEasing$.$EaseInOutQuad},$Outside:true,$Round:{$Top:1.3}},
    {$Idle:2000,$Duration:1200,x:0.3,y:-0.3,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$Assembly:260,$ChessMode:{$Column:15,$Row:15},$Easing:{$Left:$JssorEasing$.$EaseInJump,$Top:$JssorEasing$.$EaseInJump},$Outside:true,$Round:{$Left:0.8,$Top:0.8}},
    {$Idle:2000,$Duration:4000,x:-1,y:0.7,$Delay:80,$Cols:12,$Clip:11,$Move:true,$During:{$Left:[0.35,0.65],$Top:[0.35,0.65],$Clip:[0,0.1]},$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:2049,$Easing:{$Left:$JssorEasing$.$EaseOutQuad,$Top:$JssorEasing$.$EaseOutJump,$Clip:$JssorEasing$.$EaseOutQuad},$ScaleClip:0.7,$Round:{$Top:4}},
    {$Idle:2000,$Duration:4000,x:-1,y:0.7,$Delay:80,$Cols:12,$Clip:11,$Move:true,$During:{$Left:[0.35,0.65],$Top:[0.35,0.65],$Clip:[0,0.1]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:2049,$Easing:{$Left:$JssorEasing$.$EaseOutQuad,$Top:$JssorEasing$.$EaseOutJump,$Clip:$JssorEasing$.$EaseOutQuad},$ScaleClip:0.7,$Round:{$Top:4}},
    {$Idle:2000,$Duration:4000,x:-1,y:0.45,$Delay:80,$Cols:12,$Clip:15,$During:{$Left:[0.35,0.65],$Top:[0.35,0.65],$Clip:[0,0.15]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:2049,$Easing:{$Left:$JssorEasing$.$EaseLinear,$Top:$JssorEasing$.$EaseOutWave,$Clip:$JssorEasing$.$EaseOutQuad},$ScaleClip:0.7,$Round:{$Top:4}},
    {$Idle:2000,$Duration:4000,x:-1,y:0.45,$Delay:80,$Cols:12,$Clip:15,$During:{$Left:[0.35,0.65],$Top:[0.35,0.65],$Clip:[0,0.15]},$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:2049,$Easing:{$Left:$JssorEasing$.$EaseLinear,$Top:$JssorEasing$.$EaseOutWave,$Clip:$JssorEasing$.$EaseOutQuad},$ScaleClip:0.7,$Round:{$Top:4}},
    {$Idle:2000,$Duration:1200,x:0.3,y:-0.3,$Delay:80,$Cols:8,$Rows:4,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$SlideOut:true,$Assembly:260,$Easing:{$Left:$JssorEasing$.$EaseInJump,$Top:$JssorEasing$.$EaseInJump},$Outside:true,$Round:{$Left:0.8,$Top:0.8}}
  ];
  var options = {
    $AutoPlay: true,
    $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      $Transitions: shuffle(_SlideshowTransitions),
      $TransitionsOrder: 1,
      $ShowLink: true
    },
    $LazyLoading: 2
  };
  var jssor_slider1 = new $JssorSlider$(containerId, options);
};
$(function () {
  setContentSize();
});
$( window ).resize(function() {
  setContentSize();
});
function setContentSize() {
  var dWidth = $( window ).width();
  var dHeight = $( window ).height() - 170;
  if(dHeight < 200) {
    dHeight = 200;
  }
  if(dWidth > dHeight) {
    $('#contents .wrapper').width(dHeight).height(dHeight).css('margin-top','0px');
  } else {
    $('#contents .wrapper').width(dWidth).height(dWidth).css('margin-top',(dHeight + 170 - dWidth)/2+'px');
  }

  var slideshowList = $('.slideshow')[0];
  $('.slideshow').width($(slideshowList).parent().width());
  $('.slideshow').height($(slideshowList).parent().height());
  $('.slideshow div').width($(slideshowList).parent().width());
  $('.slideshow div').height($(slideshowList).parent().height());

  jssor_slider_starter('slider1_container');
  jssor_slider_starter('slider2_container');
  jssor_slider_starter('slider3_container');
  jssor_slider_starter('slider4_container');
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
