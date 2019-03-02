function truncateText(selector, maxLen, after) { 
	if(selector.length > 0) {
		selector.forEach(function(item) { 
			if(item.innerText.length > maxLen) {
				item.innerText = item.innerText.trim().substring(0, maxLen) + (after || '...');
			} else {
				item; 
			} 
		});

	} else {
		selector.innerText = selector.innerText.trim().substring(0, maxLen) + (after || '...');
	} 
};


function jqTrunc(selector, maxLen, remove, after) { 
	if(!remove) { 
		selector.each(function() { 
			if($(this).html().length < maxLen) {
				$(this)
			} else {
				$(this).html($(this).html().trim().substr(0, maxLen) + (after || '...')); 
			} 
		}); 
		} else { 
			return $(this); 
	} 
}