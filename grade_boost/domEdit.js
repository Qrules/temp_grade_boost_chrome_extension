var elements = document.getElementsByClassName("sg-font-larger-average"); 
chrome.storage.sync.get({"lowest", "configured"}, function (obj) {
	if (obj && configured){
		for(var i=0;i<elements.length;i++){
			elements[i].innerHTML = String(Number((Math.random()*(100.00-obj.lowest)))+Number(obj.lowest)).substring(0,5); //wow this was a pain to get working, apparentally + is concatanation when dealing with two numbers. Who would've thought?
		}	
	}
});
