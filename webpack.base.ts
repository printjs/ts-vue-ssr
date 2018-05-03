import * as webpack from "webpack";
import * as path from "path";
const CopyWebpackPlugin = require("copy-webpack-plugin");



export const baseConfig: webpack.Configuration = {
    // entry: "./src/entry-client.ts",
    output: {
        publicPath: ".",
        path: path.join(process.cwd(), "dist/"),
        filename: "[name].[hash].js",
    },
    mode: "production",
    resolve: {
        extensions: [".ts", ".js", ".styl", ".css", ".json"],
        alias: {
            "@src": path.join(process.cwd(), "src"),
            "vue$": "vue/dist/vue.esm.js",
            "@server": path.join(process.cwd(), "server"),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                enforce: "pre",
                loader: "tslint-loader",
            },
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: "ts-loader",
            },
        ],
    },
    devtool: "#source-map",
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.join(process.cwd(), "config/index.template.html"),
                to: path.join(process.cwd(), "dist/index.template.html"),
            },
        ]),
    ],
};
