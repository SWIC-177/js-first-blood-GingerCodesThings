let name = 'Kailee';
let age = 17;

function verifyAdulthood(name, age) {
    if (age >= 18) {
        console.log(`Welcome ${name}!`);
    } else if (age < 18){
        console.log(`You are not old enough to enter, ${name}.`);
    }
}

verifyAdulthood('Kailee', 19);