
import { INestApplication } from "@nestjs/common/interfaces";
import * as path from "path";

export class CoreMiddleWare {
    constructor(app: INestApplication, express: any) {
        app.use(express.static(path.join(process.cwd(), "dist")));
        app.use(/\.js$/, express.static(path.join(process.cwd(), "dist")));
    }
}
