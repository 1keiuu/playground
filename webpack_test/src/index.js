import { Cat } from "./class";
import { hoge } from "./test1";
const hello = () => {
  new Cat({ name: "test cat", age: 100 }).bark();
};
hello();
