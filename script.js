var myRotation = {};
myRotation.myx = 0;
myRotation.myy = 0;
myRotation.myz = 0;

var myOpacity ={};
myOpacity.opa = 0;

jQuery.getScript("https://aframe.io/releases/0.4.0/aframe.min.js", function(data, status, jqxhr) {

	/* 
		do something now that the script is loaded and code has been executed
	*/	
  $('#myAframe').html( "\
        <a-scene>\
          <a-assets>\
            <video id='my360vid' autoplay loop='true' src='https://cdn.glitch.me/c536c49d-7661-4fd9-81b8-918d12539028/t.mp4' crossorigin='anonymous'>\
          </a-assets>\
          <a-videosphere id='my360' src='#my360vid' rotation='0 0 0' opacity='0'></a-videosphere>\
      </a-scene>");
  
  TweenMax.to(myRotation,10,{myx:0, myy:260, myz:0, onUpdate:updateHandie});
  TweenMax.to(myOpacity,4,{opa:1, delay:0, onUpdate:updateHandie});
  
  
  function updateHandie()
  {
    document.getElementById('my360').setAttribute("rotation", ""+myRotation.myx+ " "+myRotation.myy+ " "+ myRotation.myz +"");
    document.getElementById('my360').setAttribute("opacity", ""+myOpacity.opa +"");
  };

});