interface PersonInterface {
  name: string;
  age: number;
}

class Person implements PersonInterface {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  greet() {
    return `hello ${this.name} glad to meet you !`;
  }
}

const personObject = new Person("aman", 16);
console.log(personObject.greet());
