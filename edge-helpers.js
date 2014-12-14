var helpers = function(){

var getNewColor = function(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
};

var darkenColor = function LightenDarkenColor(col, amt) {

    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

	 return (usePound?"#":"") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);

}

$('.btn').hover(function(){
	normalColor = $(this).css('background-color');
	console.log("on initial over this is the normalColor " + normalColor);
	var normalHex = getNewColor(normalColor);
   console.log("converted to hex is " + normalHex);
   var newColor = darkenColor(normalHex, -50);
   console.log("darkened by 20 percent is" + newColor);
   $(this).css('background-color', newColor);
   console.log(normalColor);
},
	function(){
	$(this).css('background-color', normalColor);
});

// start shrink

$('.shrink').hover(function(){
	$(this).css('transition','0.3s');
	$(this).css('transform','scale(0.9,0.9');
},
function(){
	$(this).css('transform','scale(1,1');
});
  
// start ghost button
$('.btn-ghost').css('border','5px solid #fff');
$('.btn-ghost').css('background-color','rgba(255,255,255,0.0)');
  
$('.btn-ghost').hover(function(){
	$(this).css('transition','0.4s');
  	$(this).css('background-color','rgba(255,255,255,1.0)')
  	$(this).children("div").css('color','#000');
},
function(){
	$(this).css('background-color','rgba(255,255,255,0.0)');
	$(this).children("div").css('color','#fff');
});

};