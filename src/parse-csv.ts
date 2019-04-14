const parse = require('csv-parse')
import * as fse from 'fs-extra'
import { on } from 'cluster';
const csv = require('csvtojson');

const input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"'
let results:any = []
fse.createReadStream('./testdata/csv/popln.csv')
    //console.log(results.toString());
    .pipe(csv())
    .on('data',(data:any) => results.push(data))
    .on('end', () => {
        console.log(results)
        let x = [];
        for(let result of results){
            x.push(JSON.parse(result.toString()))

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


