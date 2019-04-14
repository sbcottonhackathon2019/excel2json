"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse = require('csv-parse');
const fse = require("fs-extra");
const csv = require('csvtojson');
const input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"';
let results = [];
fse.createReadStream('./testdata/csv/popln.csv')
    //console.log(results.toString());
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
    console.log(results);
    let x = [];
    for (let result of results) {
        x.push(JSON.parse(result.toString()));
    }
    console.log(x);
});
//parse(result.toString(), {}, function(err:any ,output:any){
//  if(err){
//    console.log(err)
//}else{
//  console.log(JSON.stringify(output));
//}
//})
//# sourceMappingURL=parse-csv.js.map