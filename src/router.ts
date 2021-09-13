import { createWebHashHistory, createRouter } from "vue-router";
import Login from "./views/Login.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import ContinueDemo from "./components/ContinueDemo.vue";
import RadioDemo from "./components/RadioDemo.vue";
import InputDemo from "./components/InputDemo.vue";
import Introduce from "./components/Introduce.vue";

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Login },
        {
            path: "/doc",
            component: Doc,
            children: [
                { path: "", component: DocDemo },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
                { path: "input", component: InputDemo },
                { path: "radio", component: RadioDemo },
                { path: "continue", component: ContinueDemo },
                { path: "introduce", component: Introduce },
            ],
        },
    ],
});
router.afterEach(() => {
    console.log("路由切换了");
});