const core = require('@actions/core');
const github = require('@actions/github');
var ref = github.context.ref;
ref = ref.replace("refs/heads/","");

console.log(ref);
switch (ref) {
  case /develop/.test(ref) && ref:
    var env = "DEV";
    var altEnv = "develop";
    break;
  case /^(release-*(\d*))/.test(ref) && ref:
    var env = "QA";
    var altEnv = "qa";
    break;
  default:
    var env = "BRANCH";
    var altEnv = "none";
}
core.setOutput("environment", env);
core.setOutput("altEnvironment", altEnv);
