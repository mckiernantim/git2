function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(personA, friendB) {
    personA.friends.push(friendB);
    return person;
  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };