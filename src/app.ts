// app.ts
import Vue from "vue";
import Component from "vue-class-component";
import { createRouter } from "@src/route";



@Component({
    name: "app",
    template: `<h1>test12313123</h1>`,
})
export class App extends Vue {

}

export function createApp() {
    // 创建 router 实例
    const router = createRouter();
    const app = new Vue({
        router,
        template: `<div>
            <router-view></router-view>
        </div>`,
    });
    return { app, router };
}
