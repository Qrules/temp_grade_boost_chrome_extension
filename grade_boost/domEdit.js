var elements = document.getElementsByClassName("sg-font-larger-average"); 
chrome.storage.sync.get("lowest", function (obj) {
	for(var i=0;i<elements.length;i++){
		elements[i].innerHTML = String((Math.random()*(100-obj))+obj).substring(0,5);
	}
});
