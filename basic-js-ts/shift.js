function shift(arrayIn, shiftPosi, numShift) {
	let arrayTemp;
	let arrayPut = arrayIn;
	var i;
	if (shiftPosi == 'left') {
		for (i = 0; i < numShift; i++) {
			arrayTemp = arrayPut.shift();
			arrayPut.push(arrayTemp);
		}
	} else if (shiftPosi == 'right') {
		for (i = 0; i < numShift; i++) {
			arrayTemp = arrayPut.pop();
			arrayPut.unshift(arrayTemp);
		}
    }
	return arrayPut;
}