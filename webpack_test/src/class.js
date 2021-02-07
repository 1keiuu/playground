class Animal {
  run(name) {
    console.log(name + " is running!!");
  }
}

export class Cat extends Animal {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.age = props.age;
  }
  bark() {
    this.run(this.name);
    console.log("name: " + this.name);
    console.log("age: " + this.age);
  }
}
