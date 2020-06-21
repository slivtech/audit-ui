import { get } from "peryl/dist/http";
import IAudit from "./interfaces/AuditInterface";
import {IAdvisory} from "./interfaces/AuditInterface";

get("http://localhost/peryl/src/test.json")
            .onError(e => console.error("error", e))
            .onResponse(r => {
                const audit : IAudit = r.getJson();

                for (let keey in audit.advisories) {
                    console.log(audit.advisories[keey]);
                }

            }).send();

