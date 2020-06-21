import { HElements, HElement } from "peryl/dist/hsml";
import { HView } from "peryl/dist/hsml-app";

const nbsp = "\u00a0 ";

export interface SidebarState {
    title: string;
    menu: {
        url: string;
        label: string;
        icon: string;
    }[];
    menuActive: string;
}

export const sidebarState: SidebarState = {
    title: "PeRyL",
    menu: [
        { url: "#", label: "Home", icon: "i.fa.fa-fw.fa-home" },
        { url: "#notif", label: "Notification", icon: "i.fa.fa-fw.fa-bell" },
        { url: "#form", label: "Form", icon: "i.fa.fa-fw.fa-users" }
    ],
    menuActive: undefined
};

export const sidebarView: HView<SidebarState> = (state): HElements => [
    ["div.w3-container", [
        ["h2", [state.title]],
        ["div.w3-bar-block", {},
            state.menu.map<HElement>(m => (
                ["a.w3-bar-item.w3-button.w3-padding",
                    {
                        href: m.url,
                        classes: [["w3-light-grey", m.url === `#${state.menuActive}`]]
                    },
                    [
                        [m.icon], nbsp, m.label
                    ]
                ])
            )
        ]
    ]]
];
