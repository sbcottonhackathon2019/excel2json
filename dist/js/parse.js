"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse = require('csv-parse');
const fse = require("fs-extra");
const csv = require('csvtojson');
let results = [];
fse.createReadStream('./testdata/casv/popln.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
    let x = [];
    for (let result of results) {
        x.push(JSON.parse(result.toString()));
    }
    console.log(JSON.stringify(x));
});
//# sourceMappingURL=parse.js.map