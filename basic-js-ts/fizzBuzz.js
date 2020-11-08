function fizzBuzz(fizzBuzzIn) {
    switch ((fizzBuzzIn % 5) + (fizzBuzzIn % 3)) {
        case 0:
            return 'FizzBuzz';
            break;
    }
    switch (fizzBuzzIn % 3) {
        case 0:
            return 'Fizz';
            break;
    }
    switch (fizzBuzzIn % 5) {
        case 0:
            return 'Buzz';
            break;
    }
}