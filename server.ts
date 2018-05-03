import { NestFactory } from "@nestjs/core";
import { AppModule } from "@server/app.module";
import { express_server } from "@server/express";


async function bootstrap() {
    const app = await NestFactory.create(AppModule, express_server, {});
    await app.listen(3000);
}
bootstrap();
