const rollup = require("rollup");
const build = async () => {
  const bundle = await rollup.rollup();

  const { output } = await bundle.generate({});
  console.log(output);
};

build();
