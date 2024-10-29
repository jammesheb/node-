const path = require("path");
module.exports = {
    mode: "devolopment",
    entry: "./scr/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename:"bundle.js",

    },
    watch: true,

};
