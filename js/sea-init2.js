seajs.config({
	alias:{
		's1':'sea-slider2'
	}
});

seajs.use('s1',function(mod1){
	mod1.slider2('move-list');
});