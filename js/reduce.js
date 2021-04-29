const arr = [1, 5, 7, 2, 4];

// Math.max()
const max = arr.reduce((acc, cur, idx, arr) => {
  return cur > acc ? cur : acc;
});

// filter
const reducer = (acc, cur, idx, arr) => {
  if (cur % 5 == 0) acc.push(cur);
  return acc;
};
// NOTE: initialValue が指定されなかった場合は、reduce()は最初の要素を飛ばしてインデックス1から実行される。→ 配列の最初の値はaccの初期値になる。
// initialValueが指定されていたらインデックス0から開始する。最初のaccはinitialValueになる。
// → initialValueは設定した方がややこしくならない。特に連想配列の時とか面倒になる。
const ans = arr.reduce(reducer, []);

// groupBy
const complexArr = [
  { gid: 1, name: "test1" },
  { gid: 2, name: "test2" },
  { gid: 1, name: "test3" },
  { gid: 3, name: "test4" },
  { gid: 3, name: "test5" },
];
const groupByReducer = (acc, cur, idx, arr) => {
  let index = null;
  acc.forEach((arr, i) => {
    if (cur.gid == Object.entries(arr[0])[0][1]) index = i;
  });
  else acc.push([cur]);
  return acc;
};
const groupByAns = complexArr.reduce(groupByReducer, []);
console.log(groupByAns);
