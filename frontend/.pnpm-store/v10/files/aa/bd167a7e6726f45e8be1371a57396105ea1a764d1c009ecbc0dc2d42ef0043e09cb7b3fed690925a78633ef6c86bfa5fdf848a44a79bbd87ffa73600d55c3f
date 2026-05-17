"use strict";
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.readText = readText;
exports.readJSON = readJSON;
exports.writeText = writeText;
exports.writeJSON = writeJSON;
function throwFileNotFoundError(fileName) {
    throw new Error(`${fileName} file not found in the tree.`);
}
/**
 * Reads specified file from the given tree
 * Throws the exception if file not found
 * */
function readText(tree, fileName, encoding = 'utf8') {
    const file = tree.read(fileName);
    if (!file) {
        throwFileNotFoundError(fileName);
    }
    return file.toString(encoding);
}
/**
 * Reads specified file as JSON from the given tree
 * */
function readJSON(tree, fileName, encoding = 'utf8') {
    return JSON.parse(readText(tree, fileName, encoding));
}
/**
 * Writes specified files to the given tree
 * */
function writeText(tree, fileName, content) {
    tree.overwrite(fileName, content);
}
/**
 * Writes specified JSON to the given tree
 * */
function writeJSON(tree, fileName, content) {
    writeText(tree, fileName, JSON.stringify(content, null, 2));
}
