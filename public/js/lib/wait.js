export function delayMilliseconds(milliseconds, resolveVar) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(resolveVar);
        }, milliseconds)
    });
}

export function delaySeconds(seconds, resolveVar) {
    return delayMilliseconds((seconds*1000), resolveVar);
}