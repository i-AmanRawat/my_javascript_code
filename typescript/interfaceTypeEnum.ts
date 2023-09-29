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

/*
  type: 
    slighty diff from interfaces
    need to be equated
    very useful for union and ors
    can not be extended
*/

type Car = {
  company: string;
  seats: number;
};

function carInfo(car: Car): string {
  return `${car.company} car has ${car.seats} number of seats`;
}

console.log(
  carInfo({
    company: "Tata",
    seats: 5,
  })
);

type Circle = {
  radius: number; //always need to pass radius
  borderWidth?: number; //but borderWidth parameter is conditional
};

type Square = {
  side: number;
};

type Rectangle = {
  length: number;
  height: number;
};

type Shape = Circle | Rectangle | Square; // just like this or symbol we have and & symbol as well

function renderShape(shape: Circle | Rectangle | Square) {
  //wht you want to describe more than one such function
  console.log("rendered");
}

function calculateArea(shape: Circle | Rectangle | Square) {
  //then you have write it again nd again you can eliminate it using type thus making it easy for you to add new shape in future
  console.log("Area");
}

function shapeDetail(shape: Shape) {
  console.log("shape details");
}

//difference between types and interfaces // can be asked in interviews
/*
  can mostly be used interchangibly
  interfaces can be implemented by classes
  interfaces can be extended
  types can do union and intersection
*/

//enum
//if something is of type a,b or c then use enums

// type Arithmetic = 'div'|'mul'|'sub'|'add' //instead use enums

enum Arithmetic {
  Div, //0
  Mul, //1
  Add, //2
  Sub, //3
}

// enum Gender {
//   Male,
//   Female
// }

function calculate(a: number, b: number, type: Arithmetic) {
  //body
  console.log(type); //will print 2
}

calculate(1, 2, Arithmetic.Mul);
