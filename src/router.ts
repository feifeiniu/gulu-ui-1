import {createWebHashHistory, createRouter, START_LOCATION} from "vue-router";
import Login from "./views/Login.vue";
import Doc from "./views/Doc.vue";
import Home from "./views/Home.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import ContinueDemo from "./views/ContinueDemo.vue";
import RadioDemo from "./components/RadioDemo.vue";
import InputDemo from "./components/InputDemo.vue";
// @ts-ignore
import introduce from "./markdown/introduce.md"
// @ts-ignore
import start from "./markdown/start.md"
// @ts-ignore
import install from "./markdown/install.md"
import { h } from 'vue';

import Markdown from './components/Markdown.vue';

const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string})
export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Login },
        { path: "/home", component: Home },
        {
            path: "/doc", component: Doc,
            children: [
                { path: "", redirect: '/doc/introduce' },
                { path: "introduce", component: md(introduce) },
                { path: "start", component: md(start) },
                { path: "install", component: md(install) },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
                { path: "input", component: InputDemo },
                { path: "radio", component: RadioDemo },
                { path: "continue", component: ContinueDemo },
            ],
        },
    ],
});
router.afterEach(() => {
    console.log("路由切换了");
});