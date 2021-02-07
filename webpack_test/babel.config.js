module.exports = (api) => {
  api.cache(true);
  const presets = ["@babel/preset-react"];
  const plugins = ["@babel/plugin-transform-arrow-functions"];
  return { plugins, presets };
};
