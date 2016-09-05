define(function(require,exports,module){
	var G=require('sea-getstyle');
	exports.move = function (obj,json,options){
		options = options||{};
		options.duration = options.duration||700;
		options.easing = options.easing||'ease-out';
		
		var start = {};
		var dis = {};
		for(var key in json){
			start[key] = parseFloat(G.getStyle(obj,key));
			if(isNaN(start[key])){
				switch(key){
					case 'left':
						start[key] = obj.offsetLeft;
						break;
					case 'top':
						start[key] = obj.offsetTop;
						break;
					case 'width':
						start[key] = obj.offsetWidth;
						break;
					case 'height':
						start[key] = obj.offsetHeight;
						break;
					case 'opacity':
						start[key] = 1;
						break;
					case 'borderWidth':
						start[key] = 0;
						break;
				}
			}
			dis[key] = json[key]-start[key];
		}
		var count = Math.floor(options.duration/30);
		var n = 0;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			n++;
			for(var key in json){
				switch(options.easing){
					case 'linear':
						var cur = start[key]+dis[key]*n/count;
						break;
					case 'ease-in':
						var a = n/count;
						var cur = start[key]+dis[key]*Math.pow(a,3);
						break;
					case 'ease-out':
						var a = 1-n/count;
						var cur = start[key]+dis[key]*(1-Math.pow(a,3));
						break;
				}
				if(key=='opacity'){
					obj.style.opacity = cur;
					obj.style.filter = 'alpha(opacity='+cur*100+')';
				}else{
					obj.style[key] = cur+'px';
				}
			}
			if(n==count){
				clearInterval(obj.timer);
				options.complete&&options.complete();
			}
		},30);
	}
})