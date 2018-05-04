import * as webpack from "webpack";
import * as path from "path";
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");




const stylus = new ExtractTextPlugin({
    filename: "[name].[id].css",
});



export default {
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
            {
                test: /\.html$/,
                loader: "raw-loader",
                exclude: [path.resolve(process.cwd(), "config/index.template.html")],
            },
            {
                test: /\.styl$/,
                use: stylus.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true,
                                sourceMap: true,
                            },
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true,
                                plugins: () => [autoprefixer],
                            },
                        },
                        {
                            loader: "stylus-loader",
                            options: {
                                outputStyle: "expanded",
                                sourceMap: true,
                                sourceMapContents: true,
                                paths: "src/resource/",
                            },
                        },
                    ],
                }),
            },
        ],
    },
    devtool: "#source-map",
    plugins: [
        stylus,
    ],
};
