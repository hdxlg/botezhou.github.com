seajs.config({
	alias:{
		's':'sea-slider',
		't':'sea-slider2'
	}
});

seajs.use('s',function(mod){
	mod.slider('play');	
});


seajs.use('t',function(mod){
	mod.slider2('move-list');	
});
