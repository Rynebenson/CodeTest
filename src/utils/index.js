export function debounce(func, wait, immediate) {
    let timeout;

    return (...args) => {
        let context = this;

        let later = () => {
            timeout = null;

            if(immediate) func.apply(context, args);
        }

        var call = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if(call) func.apply(context, args);
    }
}