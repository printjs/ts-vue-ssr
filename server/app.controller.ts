import { Get, Controller, Req, Res } from "@nestjs/common";
import { bundlerenderer, renderer } from "@src/bundle";
import { createApp } from "@src/app";




@Controller()
export class AppController {
    @Get("*")
    public render(@Req() req, @Res() res) {
        const context = { url: req.url, title: "wtf" };
        const { app } = createApp();
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
        // renderer.renderToString(app, (err: any, html: string) => {
        //     // 处理错误……
        //     try {
        //         res.end(html);
        //     } catch (err) {
        //         console.warn(err);
        //     }
        // });
    }
}

