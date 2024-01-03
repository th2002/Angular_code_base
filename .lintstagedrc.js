module.exports = {
  "src/**/*.ts": (files) =>
    `ng lint ${files.map((file) => `--lint-file-patterns ${file}`).join(" ")}`,
};
