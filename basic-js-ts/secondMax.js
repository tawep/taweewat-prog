function secondMax(arrayIn) {
    var i;
    let arrayPut = arrayIn;
    if (arrayPut.length == 0) {
        return 'Error!';
    } else if (arrayPut.length == 1) {
        return arrayPut;
    } else {
        var indexMax = arrayPut.indexOf(Math.max(...arrayPut));
        arrayPut.splice(indexMax, 1);
        return Math.max(...arrayPut);
    }
}