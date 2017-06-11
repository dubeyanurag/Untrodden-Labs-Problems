var q = require('q');
var start = 1;

function checkA() {
    var promise = q.defer();
    promise.resolve('passCheckA');
    return promise.promise;
}
function recurse(iter) {
    var promise = q.defer();
    checkA().then(function () {
        setTimeout(function () {
            if (iter <= 100) {
                console.log(iter);
                recurse(iter + 1).then(function(){
                    promise.resolve(iter);
                });
            }
        }, Math.random()*1000);
    }, function () {
        promise.reject();
    });
    return promise.promise;
}
recurse(start);