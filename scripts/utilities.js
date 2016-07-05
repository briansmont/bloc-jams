//the function will send back the callbackFunc calling each index # starting with 0
function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}
