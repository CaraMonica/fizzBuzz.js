for (let i=0; i<=100; i++) {
    let message = '';
    if (i % 3 === 0) {
        message += 'Fizz';
    }

    if (i % 5 === 0) {
        message += 'Buzz';
    }

    console.log(message === '' ? i : message);

}