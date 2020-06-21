import { HApp, HAppAction, HDispatcher, HContext } from "peryl/dist/hsml-app";
import { appShellState, appShellView, AppShellAction, AppShellState } from "./components/appshell";
import { Hash } from "peryl/dist/hash";
import { post } from "peryl/dist/http";


const dispatcher: HDispatcher<AppShellState> = (app, action) => {
    console.log("app action", action);

    switch (action.type) {

        case HAppAction._init:
            app.update();
            break;

        case HAppAction._mount:
        case HAppAction._umount:
            break;

        case AppShellAction.menu:
            app.state.menu = action.data === null ? !app.state.menu : action.data;
            app.update();
            break;

        default:
            console.warn("unhandled:", action);
    }
};

HApp.debug = true;

const app = new HApp(appShellState, appShellView, dispatcher).mount();
(self as any).app = app;


new Hash<string>()
    .onChange(module => {
        console.log("hash: " + JSON.stringify(module));
        app.state.navbar.menuActive = module;
        app.state.content = module;
        app.state.menu = false;
        app.update();
    })
    .listen();
