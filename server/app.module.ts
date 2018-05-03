import { Module } from "@nestjs/common";
import { AppController } from "@server/app.controller";


@Module({
    imports: [],
    controllers: [AppController],
    components: [],
})
export class AppModule { }
