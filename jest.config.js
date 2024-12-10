/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {"^(\\.{1,2}/.*)\\.js$": "$1"},
  testEnvironment: "jsdom",
  roots: ["static/react"],
  globals: {
    "IS_REACT_ACT_ENVIRONMENT": true
  },
  transform: {
    "^.+\\.tsx?$": "babel-jest",
     "^.+\\.ts?$": "babel-jest"
  },
};
