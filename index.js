const people = [
    {
      name: "John",
      age: 17,
    },
    {
      name: "Jane",
      age: 20,
    },
    {
      name: "Mary",
      age: 25,
    },
    {
      name: "Peter",
      age: 30,
    },
    {
      name: "Paul",
      age: 35,
    },
  ]; 

let i = 0;
  
  function verifyAdulthood(people, i) {
    
     if (people[i].age >= 18) return `Welcome, ${people[i].name}!`;
  
    return `You are not old enough to enter, ${people[i].name}.`;
}

while (i < people.length){
    console.log(verifyAdulthood(people,i));
    i++;
}
  


  
  
