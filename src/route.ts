// router.js
import Vue from "vue";
import Router from "vue-router";
import { App } from "@src/app";
import { Test } from "@src/views/test/test";


Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: "history",
        routes: [
            {
                path: "/",
                component: App,
            },
            {
                path: "/test",
                component: Test,
            },
        ],
    });
}
