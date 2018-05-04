// router.js
import Vue from "vue";
import Router from "vue-router";
import { Test } from "@views/test/test";
import { App } from "@views/app/app";


Vue.use(Router);

export function createRouter() {
    return new Router({
        mode: "history",
        routes: [
            {
                path: "/test",
                component: Test,
            },
        ],
    });
}
