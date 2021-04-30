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

// groupBy (n=40200のデータは余裕で動いた)
const complexArr = [
  { gid: 1, name: "test1" },
  { gid: 2, name: "test2" },
  { gid: 1, name: "test3" },
  { gid: 3, name: "test4" },
  { gid: 3, name: "test5" },
  { gid: 1, name: "test1" },
  { gid: 2, name: "test2" },
];
const groupByReducer = (acc, cur, idx, arr) => {
  let index = null;
  acc.forEach((arr, i) => {
    if (cur.gid == Object.entries(arr[0])[0][1]) index = i;
  });
  // NOTE: if(!index)だと0の場合も弾かれてしまう
  if (index == null) acc.push([cur]);
  else if (index >= 0) {
    acc[index].push(cur);
  }
  return acc;
};
const groupByAns = complexArr.reduce(groupByReducer, []);
console.log(groupByAns[0].length);
console.log(groupByAns[1].length);
console.log(groupByAns[2].length);
