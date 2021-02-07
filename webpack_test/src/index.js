import { Cat } from "./class";
import { hoge } from "./test1";
const hello = () => {
  new Cat({ name: "testcat", age: 100 }).bark();
};
hello();
