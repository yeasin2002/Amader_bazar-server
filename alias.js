const path = require("path");
const moduleAlias = require("module-alias");

moduleAlias.addAliases({
    $root: __dirname,
    $src: path.resolve(__dirname, "src"),
    $controller: path.resolve(__dirname, "./src/controller/*"),
    $helper: path.resolve(__dirname, "./src/helper/*"),
    $assets: path.resolve(__dirname, "./src/assets/*"),
    $data: path.resolve(__dirname, "./src/data/*"),
    $logs: path.resolve(__dirname, "src/log/*"),
    $middleware: path.resolve(__dirname, "src/middleware/*"),
    $model: path.resolve(__dirname, "src/model/*"),
    $npmModules: path.resolve(__dirname, "src/npmModules/*"),
    $router: path.resolve(__dirname, "src/router/*"),
    $services: path.resolve(__dirname, "src/service/*"),
    $utils: path.resolve(__dirname, "src//utils/*"),
    $reqSchema: path.resolve(__dirname, "src/validationSchema/*"),
});
