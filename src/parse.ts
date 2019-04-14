const parse = require('csv-parse')
import * as fse from 'fs-extra'
const csv = require('csvtojson');


let results:any = []
fse.createReadStream('./testdata/casv/popln.csv')
.pipe(csv())
.on('data', (data:any) => results.push(data))
.on('end', () => {
   let x =[];
    for(let result of results){
        x.push(JSON.parse(result.toString()))
    }
   console.log(JSON.stringify(x));
});