(function(){
	'use strict';//use javascript strict mode
	var relTitle=document.title;//get and save current title
	var hidden,visibilityChange;
	if (typeof document.hidden!=="undefined") {
		hidden="hidden";
		visibilityChange = "visibilitychange";
	}else if (typeof document.mozHidden !== "undefined") { // Firefox up to v17
				hidden = "mozHidden";
				visibilityChange = "mozvisibilitychange";
	}else if (typeof document.msHidden !== "undefined") { //IE explorer
    			hidden = "msHidden";
    			visibilityChange = "msvisibilitychange";
	}else if (typeof document.webkitHidden !== "undefined") { // Chrome up to v32, Android up to v4.4, Blackberry up to v10
				hidden = "webkitHidden";
				visibilityChange = "webkitvisibilitychange";
	}
	function handlevisibilityChange(){
		if (document[hidden]) {//if the tab is invisible,show some thing
			document.title = '(●––●) 你好，我是大白';
		}else{
			document.title = relTitle;
		}
	}
	if (typeof document.addEventListener==="undefined"&&typeof document[hidden]==="undefined") {//if the browser is unsupport html5~
		alert("your browser is out of date,please update it!")
	}else{
		document.addEventListener(visibilityChange,handlevisibilityChange,false)//bind browser tab change event
	}
})();