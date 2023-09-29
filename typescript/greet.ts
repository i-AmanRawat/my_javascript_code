/*
    interface:
        can accumulate data of specific type
        one interface can use another interface
        interfaces can be extended
        can be implemented by class
*/

//Method 01 : describing the peron obj in the function itself but what if you want to describe another func with same person obj
// you will have to write it again so to avoid that see method 02

/*
function greet(person: { name: string; age: number }): string {
  return `hello ${person.name}, glad to hear you are ${person.age} years old !`;
}

console.log(
  greet({
    name: "Aman Rawat",
    age: 16,
  })
);
*/

//Method 02: using interface

interface Gender {
  sex: "Male" | "Female";
  orientation: string;
}

interface Character {
  name: string;
  age: number;
  genderDetail: Gender;
}
// if you want gender details not in obj format by directly as a property then use extends
// interface Character extends Gender {
//   name: string;
//   age: number;
// }

function wish(character: Character): string {
  return `hello, myself ${character.name}.\nI am ${character.age} years old, ${character.genderDetail.orientation} ${character.genderDetail.sex} !`;
}

console.log(
  wish({
    name: "Aman Rawat",
    age: 16,
    genderDetail: { sex: "Male", orientation: "straight" },
  })
);
