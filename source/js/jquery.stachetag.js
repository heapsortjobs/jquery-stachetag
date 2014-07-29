(function($){

	$.fn.stachetag = function(options) {

		var stache_graph = '<i class="stachetag-stache"></i>';

		var settings = $.extend({
			stache_template: '<a href="#%w">%s</a>',
			graphic_staches: false,	
		}, options);
		
		return this.each(function(){
			$this = $(this);

			var stache_stash = '$1{';
			if (settings.graphic_staches)
				stache_stash = '$1' + stache_graph;
			
			parsed_template = settings.stache_template
				.replace(/%s/g, stache_stash)  // Replace %s with the actual stachetag
				.replace(/%w/g, '$1');  // Replace %w with the word represented by the stachetag
			$this.html($this.html().replace(/(\S+){/g, parsed_template));
		});
	
	};

})(jQuery);