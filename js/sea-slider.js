define(function(require,exports,module){
	var M=require('sea-move');
	exports.slider=function(id){
		// 第一种效果
		var oPlay=document.getElementById(id);
		var aBtn=oPlay.getElementsByTagName('ol')[0].getElementsByTagName('li');
		var oUl=oPlay.children[1];

		var timer=null;
    	for (var i = 0; i < aBtn.length; i++) {
    		aBtn[i].index=i;
    		aBtn[i].onclick=function(){

    			for (var i = 0; i < aBtn.length; i++) {
    				aBtn[i].className='';
    			};
    			this.className='active';
    			// oUl.style.left=-oPlay.offsetWidth*(this.index)+'px';
    			M.move(oUl,{
    				'left':-oPlay.offsetWidth*(this.index)
    			})
    		}
    	};
    	clearInterval(timer);
    	clock();	    		    	
    	function clock(){
    		var n=0;
    		timer=setInterval(function(){
	           	n++;
	            if(n==5){
	            	n=0;
	            }
	            for(var i=0;i<aBtn.length;i++){
	            	aBtn[i].className='';
	            }
	            aBtn[n].className='active';
	           	M.move(oUl,{'left':-oPlay.offsetWidth*n})	            	       
    		},2000);
    	}
    	
    	oUl.onmouseover=function(){
    		clearInterval(timer);
    	}
    	oUl.onmouseout=function(){
    		
    		clock();
    	}
	}
})