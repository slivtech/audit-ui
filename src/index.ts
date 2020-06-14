import {RootObject} from './interfaces/AuditInterface'

const jsonString : string = `
{
    "actions": [
      {
        "isMajor": true,
        "action": "install",
        "resolves": [
          {
            "id": 1179,
            "path": "ngx-infinite-scroll>opencollective>minimist",
            "dev": false,
            "optional": false,
            "bundled": false
          }
        ],
        "module": "ngx-infinite-scroll",
        "target": "9.0.0"
      },
      {
        "isMajor": true,
        "action": "install",
        "resolves": [
          {
            "id": 1179,
            "path": "karma>optimist>minimist",
            "dev": true,
            "optional": false,
            "bundled": false
          }
        ],
        "module": "karma",
        "target": "5.1.0"
      },
      {
        "isMajor": true,
        "action": "install",
        "resolves": [
          {
            "id": 1515,
            "path": "papaparse",
            "dev": false,
            "optional": false,
            "bundled": false
          }
        ],
        "module": "papaparse",
        "target": "5.2.0"
      }
    ],
    "advisories": {
      "1179": {
        "findings": [
          {
            "version": "1.2.0",
            "paths": [
              "ngx-infinite-scroll>opencollective>minimist"
            ]
          },
          {
            "version": "0.0.10",
            "paths": [
              "karma>optimist>minimist"
            ]
          }
        ],
        "id": 1179,
        "created": "2019-09-23T15:01:43.049Z",
        "updated": "2020-03-18T19:41:45.921Z",
        "deleted": null,
        "title": "Prototype Pollution",
        "found_by": {
          "link": "https://www.checkmarx.com/resources/blog/",
          "name": "Checkmarx Research Team",
          "email": ""
        },
        "reported_by": {
          "link": "https://www.checkmarx.com/resources/blog/",
          "name": "Checkmarx Research Team",
          "email": ""
        },
        "module_name": "minimist",
        "cves": [],
        "vulnerable_versions": "<0.2.1 || >=1.0.0 <1.2.3",
        "patched_versions": ">=0.2.1 <1.0.0 || >=1.2.3",
        "overview": "Affected versions of \`minimist\` are vulnerable to prototype pollution. Arguments are not properly sanitized, allowing an attacker to modify the prototype of \`Object\`, causing the addition or modification of an existing property that will exist on all objects.  \nParsing the argument \`--__proto__.y=Polluted\` adds a \`y\` property with value \`Polluted\` to all objects. The argument \`--__proto__=Polluted\` raises and uncaught error and crashes the application.  \nThis is exploitable if attackers have control over the arguments being passed to \`minimist\`.\n",
        "recommendation": "Upgrade to versions 0.2.1, 1.2.3 or later.",
        "references": "- [GitHub commit 1](https://github.com/substack/minimist/commit/4cf1354839cb972e38496d35e12f806eea92c11f#diff-a1e0ee62c91705696ddb71aa30ad4f95)\n- [GitHub commit 2](https://github.com/substack/minimist/commit/63e7ed05aa4b1889ec2f3b196426db4500cbda94)",
        "access": "public",
        "severity": "low",
        "cwe": "CWE-471",
        "metadata": {
          "module_type": "",
          "exploitability": 1,
          "affected_components": ""
        },
        "url": "https://npmjs.com/advisories/1179"
      },
      "1515": {
        "findings": [
          {
            "version": "4.6.0",
            "paths": [
              "papaparse"
            ]
          }
        ],
        "id": 1515,
        "created": "2020-04-15T19:14:42.532Z",
        "updated": "2020-05-19T21:45:14.591Z",
        "deleted": null,
        "title": "Regular Expression Denial of Service",
        "found_by": {
          "link": "",
          "name": "Mikhail Sidorov",
          "email": ""
        },
        "reported_by": {
          "link": "",
          "name": "Mikhail Sidorov",
          "email": ""
        },
        "module_name": "papaparse",
        "cves": [],
        "vulnerable_versions": "<5.2.0",
        "patched_versions": ">=5.2.0",
        "overview": "Versions of \`papaparse\` prior to 5.5.2 are vulnerable to Regular Expression Denial of Service (ReDos). The \`parse\` function contains a malformed regular expression that takes exponentially longer to process non-numerical inputs. This allows attackers to stall systems and lead to Denial of Service.",
        "recommendation": "Upgrade to version 5.2.0 or later.",
        "references": "- [Snyk Report](https://snyk.io/vuln/SNYK-JS-PAPAPARSE-564258)\n- [GitHub Issue](https://github.com/mholt/PapaParse/issues/777)",
        "access": "public",
        "severity": "high",
        "cwe": "CWE-400",
        "metadata": {
          "module_type": "",
          "exploitability": 6,
          "affected_components": ""
        },
        "url": "https://npmjs.com/advisories/1515"
      }
    },
    "muted": [],
    "metadata": {
      "vulnerabilities": {
        "info": 0,
        "low": 2,
        "moderate": 0,
        "high": 1,
        "critical": 0
      },
      "dependencies": 283,
      "devDependencies": 655,
      "optionalDependencies": 9,
      "totalDependencies": 939
    },
    "runId": "93db28cf-4607-4b72-82f5-2790133c740f"
  }
`;

const a : Object = JSON.parse(jsonString);
console.log(a);
//const root : RootObject = JSON.parse(jsonString);
