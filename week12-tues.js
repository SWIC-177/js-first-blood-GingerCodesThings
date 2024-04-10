const person = {
    name: "John Doe",
    age: 23,
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  };
  
  // Create a new object with the same properties as the original object.
 
    function updatePerson (p, newName) {
        return {...p, "name": newName};
    }
 
  let otherPerson = updatePerson(person, "Kailee Maurer");

  console.log(`Person's name is: ${person.name}`);
  console.log(`Other Person's name is: ${otherPerson.name}`);