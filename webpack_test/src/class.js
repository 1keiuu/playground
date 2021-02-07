export class Cat {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
  }
  bark() {
    console.log("name:" + this.name);
    console.log("age:" + this.age);
  }
}
