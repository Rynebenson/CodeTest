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

export function calculate_price(price, percent_discount) {
    let newPrice = price - (price * (percent_discount / 100))
    
    return newPrice
}