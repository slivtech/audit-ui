import { HElements } from "peryl/dist/hsml";
import { HView } from "peryl/dist/hsml-app";
import { SidebarState, sidebarView, sidebarState } from "./sidebar";
import { homeView, homeState, HomeState } from "./home";
import { navbarView, navbarState, NavbarState } from "./navbar";
import { auditState, AuditState, auditView } from "./audit";

export interface AppShellState {
    title: string;
    subtitle: string;
    menu: boolean;
    navbar: NavbarState;
    content: string;
    contents: {
        home: HomeState;
        audit: AuditState;
    };
}

export const appShellState: AppShellState = {
    title: "PeRyL",
    subtitle: "Audit",
    menu: false,
    navbar: navbarState,
    content: "home",
    contents: {
        home: homeState,
        audit: auditState
    }
};

export const enum AppShellAction {
    menu = "appshell-menu",
}

export const appShellView: HView<AppShellState> = (state): HElements => {
    let content;
    console.log(state.content);
    switch (state.content) {
        case "audit":
            console.log("STATE", state);
            content = auditView(state.contents.audit);
            break;
        case "home":
        default:
            content = homeView(state.contents.home);
            break;
    }
    return [
        // header
        ["header.navbar.navbar-expand-lg.navbar-dark.bg-dark", [
            ["div.container", [
                ["a.navbar-brand", { href: "#", style: "font-weight: 600;" },
                    [state.title,
                    ["span.small", state.subtitle ? " - " + state.subtitle : ""]
                    ],
                ],
                ["button.navbar-toggler", { "data-toggle": "collapse", "data-target": "#navbarNavDropdown", "aria-controls": "navbarNavDropdown", "aria-expanded": false }, [
                    ["span.navbar-toggler-icon"]
                ]],
                ["div#navbarNavDropdown.collapse.navbar-collapse",
                    navbarView(state.navbar)
                ]
            ]
            ]
        ]
        ],
        // main
        ["div.container", { style: "margin-top: 50px" }, [
            ["div.content-wrapper",
                content
            ]
        ]]
    ];
};
