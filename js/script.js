
function showMugOptions() {
    document.getElementById("select_mug").style.display = "inline";
}

function crop() {
	$('#img').rcrop({
	//minSize : [200,200],
	preserveAspectRatio : true,
	preview : {
    	display : true,
    	size : [100, 100],
	}
	});
	var $img = $('#img'),
    $update = $('#update'),
    inputs = {
        x : $('#x'),
        y : $('#y'),
        width : $('#width'),
        height : $('#height')
    },
    fill = function(){
        $img.rcrop('updateCropData');
        var values = $img.rcrop('getValues');
        for(var coord in inputs){
            inputs[coord].val(values[coord]);
        }
    };
	// Fill inputs when Responsive Cropper is ready and when crop area is being resized or dragged 
	$img.on('rcrop-change rcrop-ready', fill);
}

// Copyright 2014-2015 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}