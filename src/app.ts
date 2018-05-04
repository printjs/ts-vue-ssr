// app.ts
import Vue, { CreateElement } from "vue";
import Component from "vue-class-component";
import { createRouter } from "@src/route";


require("./app.styl");
@Component({
    name: "app",
    template: require("./app.html"),
})
export class App extends Vue {
    public arr: string[] = [
        "www",
        "google",
        ".com",
    ];
    public i: number = 0;
    public created() {
        console.log(this.arr);
    }

    public mounted() {
        console.log("mounted");
    }
    public test() {
        this.$router.push("/test");
        this.i++;
        console.log(this.i);
        console.log(this.$router);
        console.log(document);
    }
}

export function createApp() {
    // 创建 router 实例
    const router = createRouter();
    const app = new Vue({
        router,
        render: (h: CreateElement) => h(App),
    });
    return { app, router };
}
