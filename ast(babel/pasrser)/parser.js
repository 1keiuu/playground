const parser = require("@babel/parser");
const util = require("util");
const fs = require("fs");
const generator = require("@babel/generator");

const target = fs.readFileSync("./input.js", { encoding: "utf-8" });
const ast = parser.parse(target);

for (let i = 0; i < ast.program.body.length; i++) {
  const node = ast.program.body[i];
  if (node.declarations) {
    // 変数の中身をhogehogeに変換
    node.declarations[0].init.value = "hogehoge";
  }
}

const generatedCode = generator.default(ast, target);

fs.writeFile("./output.js", generatedCode.code, (err) => {
  if (err) throw err;
});
