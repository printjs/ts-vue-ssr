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
        // created
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
