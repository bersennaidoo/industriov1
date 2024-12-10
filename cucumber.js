let options = [
    '--require-module ts-node/register',
    '--require ./e2e/steps/*.steps.ts',
    '--format progress',
].join(' ')

let run_features = [
    './e2e/features/',
    options,
].join(' ')

module.exports = {
    test_runner: run_features
}