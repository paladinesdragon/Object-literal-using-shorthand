//rewrite using ES6 to define object literals

const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};

const createPerson2 = (name, age, gender) => ({name, age, gender});

console.log(createPerson('me', 34, 'male'));
console.log(createPerson2('myself', 22, 'female'));