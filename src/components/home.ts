import { HElements } from "peryl/dist/hsml";
import { HView } from "peryl/dist/hsml-app";

export interface HomeState {
    title: string;
    text: string;
}

export const homeState = {
    title: "Home",
    text: "text text text"
};

export const homeView: HView<HomeState> = (state): HElements => [
    ["div.w3-content", [
        ["h1", state.title],
        ["p", state.text]
    ]]
];
