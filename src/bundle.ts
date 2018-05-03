const { createBundleRenderer } = require("vue-server-renderer");
import * as path from "path";
import * as fs from "fs";

const html = fs.readFileSync(path.join(process.cwd(), "dist/index.template.html"), "utf-8");
const serverBundle = require(path.join(process.cwd(), "dist/vue-ssr-server-bundle.json"));
const clientManifest = require(path.join(process.cwd(), "dist/vue-ssr-client-manifest.json"));


export const bundlerenderer = createBundleRenderer(serverBundle, {
    template: html,
    clientManifest,
});


export const renderer = require("vue-server-renderer").createRenderer();
