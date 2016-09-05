define(function(require,exports,module){
	var M=require('sea-move');
	exports.slider2=function(id){
		var oMove=document.getElementById(id);
    	var aList=oMove.getElementsByTagName('div');
    	
    	for (var i = 0; i < aList.length; i++) {
    		aList[i].onmouseover=function(){
    			M.move(this,{'top':-40},{duration:500})
    		}
    		aList[i].onmouseout=function(){
    			M.move(this,{'top':0},{duration:500})
    		}
    	};
	};
});