export function debounce(func, wait, immediate) {
    var timeout;
    
	return (...args) => {
        var context = this;
        
		var later = () => {
			timeout = null;
			if (!immediate) func.apply(context, args);
        };
        
        var call = immediate && !timeout;
        
        clearTimeout(timeout);
        
        timeout = setTimeout(later, wait);
        
		if (call) func.apply(context, args);
	};
};