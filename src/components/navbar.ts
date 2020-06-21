import { HElements, HElement } from "peryl/dist/hsml";
import { HView } from "peryl/dist/hsml-app";
import { AppShellAction } from "./appshell";

const nbsp = "\u00a0 ";

export interface NavbarState {
    menu: {
        url: string;
        label: string;
    }[];
    menuActive: string;
}

export const navbarState: NavbarState = {
    menu: [
        { url: "#", label: "Home"},
        { url: "#audit", label: "Audit"},
    ],
    menuActive: "active"
};

export const navbarView: HView<NavbarState> = (state): HElements => [
    ["ul.navbar-nav", 
        state.menu.map<HElement>( m => (
            ["li.nav-item", {
                classes: [["active", m.url === `#${state.menuActive}` ]]
            }, [
                ["a.nav-link", {
                    href: m.url,
                    on: ["click", AppShellAction.menu]
                }, m.label]
            ]]
        )

        )
    ],
];
