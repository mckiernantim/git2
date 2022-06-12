function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(person, whatever) {
    person.friends.push(whatever);
    return person;
  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };