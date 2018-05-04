import { Get, Controller, Req, Res } from "@nestjs/common";
const { createBundleRenderer } = require("vue-server-renderer");
import * as path from "path";
import * as fs from "fs";
import { bundlerenderer } from "@src/bundle";
import { Buffer } from "buffer";





@Controller()
export class AppController {
    @Get("*")
    public render(@Req() req, @Res() res) {
        const context = { url: req.url, title: "wtf" };
        if (process.env.NODE_ENV === "development") {
            const page = fs.readFileSync(path.join(process.cwd(), "dist/index.template.html"), "utf-8");
            const serverBundle = JSON.parse(
                fs.readFileSync(path.join(process.cwd(), "dist/vue-ssr-server-bundle.json"), "utf-8"));
            const clientManifest = JSON.parse(fs.readFileSync(
                path.join(process.cwd(), "dist/vue-ssr-client-manifest.json"), "utf-8"));
            const renderer = createBundleRenderer(serverBundle, {
                template: page,
                clientManifest,
                runInNewContext: false,
            });
            renderer.renderToString(context, (err: any, html: string) => {
                // 处理异常……
                if (err) {
                    if (err.code === 404) {
                        res.status(404).end("Page not found");
                    } else {
                        res.status(500).end("Internal Server Error");
                    }
                } else {
                    res.type("html");
                    res.end(html);
                }
            });
        } else {
            bundlerenderer.renderToString(context, (err: any, html: string) => {
                // 处理异常……
                if (err) {
                    if (err.code === 404) {
                        res.status(404).end("Page not found");
                    } else {
                        res.status(500).end("Internal Server Error");
                    }
                } else {
                    res.end(html);
                }
            });
        }

        // } else {
        //     const { app } = createApp();
        //     renderer.renderToString(app, context, (err: any, html: string) => {
        //         // 处理错误……
        //         try {
        //             res.end(html);
        //         } catch (err) {
        //             console.warn(err);
        //         }
        //     });
        // }
    }
}

