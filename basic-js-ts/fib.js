function fib(num) {
	if (num <= 2) {
		return 1;
	} else {
		result = fib(num - 1) + fib(num - 2);
		return result;
	}
}