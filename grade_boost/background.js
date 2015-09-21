chrome.browserAction.onClicked.addListener(function(tab) {

var elements = document.getElementsByClassName("sg-font-larger-average");
	for(var i=0;i<elements.length;i++){
		elements[i].innerHTML = String((Math.random()*7.00)+93).substring(0,5);
	}

});
