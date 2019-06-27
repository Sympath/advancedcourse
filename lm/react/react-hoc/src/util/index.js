// 防抖
export function debounce(func,wait) {

    var result,timeId;
    return function (params) {
        var context = this;
        var args = arguments;
        clearTimeout(timeId)
        timeId = setTimeout(function (params) {
             result = func.apply(context,args)
        }, wait);
        return result;
    }
}
// 可用於裝飾的  方法
export function decDebounce(wait) {
    return function (taget, key, descriptor) {
        var callBack = descriptor.value;
        var fn = debounce(callBack, wait);
        descriptor.value = fn;
    }
}

// 装饰属性
export function decArrowDebounce(wait) {
    return function (target,key,descriptor) {
        console.log(target);
         target.displayName = "displayName";
        var callBack = descriptor.initializer && descriptor.initializer();
        var fn = debounce(callBack, wait);
        return {
            configurable: true,
            get: function (params) {
                return fn;
            }
        }
    }
}

export function decDisplayName(displayName) {
    return function (target) {
        target.displayName = displayName;
    }
    
}