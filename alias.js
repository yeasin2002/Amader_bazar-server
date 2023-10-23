const path = require("path");
const moduleAlias = require("module-alias");

moduleAlias.addAliases({
    $root: __dirname,
    $src: path.resolve(__dirname, "src"),
});
