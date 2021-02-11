const parser = require("@babel/parser");
const util = require("util");
const fs = require("fs");

const target = fs.readFileSync("./input.js", { encoding: "utf-8" });
const data = util.inspect(parser.parse(target), false, null);
fs.writeFile("./output.js", data, (err) => {
  if (err) throw err;
  console.log(err);
});
