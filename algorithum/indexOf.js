// 自家製indexOF
class Arr {
  self = [];
  constructor(arg) {
    this.self = arg;
  }
  indexOf(target) {
    let res = -1;
    this.self.forEach((n, i) => {
      if (n == target) {
        res = i;
        return;
      }
    });
    return res;
  }
}

console.log(new Arr([1, 2, 3]).indexOf(2));

// TODO: prototypeを使ってindexOfを標準としてArrayに生やす
class A extends Array {
  constructor(self) {
    this.self = self;
  }
}

A.indexOf = (target) => {
  let res = -1;
  this.self.forEach((n, i) => {
    if (n == target) {
      res = i;
      return;
    }
  });
  return res;
};

console.log(A([1, 2, 3]).indexOf(2));
