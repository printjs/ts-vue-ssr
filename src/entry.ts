import { createRouter } from "@src/route";
import Vue, { CreateElement } from "vue";
import { App } from "@views/app/app";



export function createApp() {
    // 创建 router 实例
    const router = createRouter();
    const app = new Vue({
        router,
        render: (h: CreateElement) => h(App),
    });
    return { app, router };
}

