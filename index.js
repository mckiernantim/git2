function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(person, friendB) {
    person.friends.push(friendB);
    return person;
  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };