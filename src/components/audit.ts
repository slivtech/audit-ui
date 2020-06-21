import { HElements } from "peryl/dist/hsml";
import { HView } from "peryl/dist/hsml-app";
import IAudit from "../interfaces/AuditInterface";
import { get } from "peryl/dist/http";


export interface AuditState {
    title: string;
    text: string;
}

export const auditState = {
    title: "Audit",
    text: "this is audit state",
};

export const auditView: HView<AuditState> = (state): HElements => [
    ["div.w3-content", [
        ["h1", state.title],
        ["p", state.text]
    ]]
];
