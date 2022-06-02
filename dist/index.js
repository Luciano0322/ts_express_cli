#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const args = yargs_1.default.option({
    name: {
        type: 'string',
        demandOption: true,
        alias: 'n'
    }
}).argv;
fs_extra_1.default.mkdir(`./${args['name']}`, (error) => {
    if (error) {
        return console.log("Could not create project");
        process.exit(0);
    }
    const srcDir = `${path_1.default.resolve(__dirname)}/../tmp`;
    const destDir = `./${args['name']}`;
    fs_extra_1.default.copySync(srcDir, destDir);
    console.log("Project created successfully!");
    process.exit(0);
});
//# sourceMappingURL=index.js.map