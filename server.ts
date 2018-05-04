import { NestFactory } from "@nestjs/core";
import { AppModule } from "@server/app.module";
import { INestApplication } from "@nestjs/common";
import * as http from "http";
import { CoreMiddleWare } from "@server/middleware";
import express from "express";






async function bootstrap() {
    const express_server = express();
    const app: INestApplication = await NestFactory.create(AppModule, express_server, {});
    new CoreMiddleWare(app, express);
    await app.init();

    http.createServer(express_server).listen(3000);
}
bootstrap();
