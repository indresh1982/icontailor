$(function () {
  setBannerSize('bgBanner');
  jssorSliderStarter('bgBanner');
});

function setBannerSize(containerId) {
  var iWidth = 1920;
  var iHeight = 900;
  var bannerR = iHeight/iWidth;
  var dWidth = window.innerWidth;// $( window ).width();
  var dHeight = window.innerHeight; //$( window ).height();

  var sWidth, sHeight;
  console.log(dWidth, dHeight, bannerR);
  if(dHeight / dWidth < bannerR) {
    sWidth = dWidth;
    sHeight = sWidth * bannerR;
  } else {
    sHeight = dHeight;
    sWidth = sHeight / bannerR;
  }
  var left = 0
  if(dWidth < 1000) {
    left = (dWidth - sWidth)/2;
  }
  if(dWidth < 500 || dHeight < 500) {
    var tileSize = dWidth*0.28;
    if(dHeight < dWidth) {
      tileSize = dHeight * 0.28;
    }
    $('.nav-tile').css('max-width', ((tileSize * 2) + 21) + 'px');
    $('.home-tile').css('width', tileSize + 'px').css('height', tileSize + 'px');
  }
  $('#' + containerId).css('width',sWidth + 'px').css('height',sHeight + 'px');
  $('#' + containerId + ' div').css('width',sWidth + 'px').css('height',sHeight + 'px').css('left',left + 'px');
}

$( window ).resize(function() {
  location.reload();
});