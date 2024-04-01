let myNum = 0;

while (myNum <= 99){
    myNum++

    if (myNum % 3 == 0 && myNum % 5 == 0) {
        console.log('Fizzbuzz');
    } else if (myNum % 3 == 0) {
        console.log('Fizz');
    } else if (myNum % 5 == 0) {
        console.log('Buzz'); 
    } else {
        console.log(myNum);
    }
}

