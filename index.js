const person = {
    name: "John",
    age: 17,
  };
   
    /* changed personName and personAge to person. personName and personAge 
  is the incorrect way to call the name and age attributes 
  */ 
  
  function verifyAdulthood(person) {
    if (person.age >= 18) return `Welcome, ${person.name}!`;
  
    return `You are not old enough to enter, ${person.name}.`;
  }
  
  const adultMessage = verifyAdulthood(person);
  
  console.log(adultMessage);
  
