const core = require('@actions/core');
const github = require('@actions/github');
var ref = github.context.ref;
ref = ref.replace("refs/heads/","");

console.log(ref);
switch (ref) {
  case /develop/.test(ref) && ref:
    var env = "DEV";
    var altEnv = "develop";
    var subdomain = ".dev";
    break;
  case /main/.test(ref) && ref:
    var env = "DEV";
    var altEnv = "develop";
    var subdomain = ".dev";
    break;
  case /^(release-*(\d*))/.test(ref) && ref:
    var env = "QA";
    var altEnv = "qa";
    var subdomain = ".qa";
    break;
  case /staging/.test(ref) && ref:
    var env = "STAGING";
    var altEnv = "staging";
    var subdomain = ".staging";
    break;
  case /prod/.test(ref) && ref:
    var env = "PROD";
    var altEnv = "prod";
    var subdomain = "";
    break;
  default:
    var env = "BRANCH";
    var altEnv = "none";
    var subdomain = ".dev";
}
core.setOutput("environment", env);
core.setOutput("altEnvironment", altEnv);
core.setOutput("subdomain", subdomain);
core.setOutput("shortBranchName", ref);
