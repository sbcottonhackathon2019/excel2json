
'use strict';
import * as tapTypes from './tap-types'
import { checkServerIdentity } from 'tls';
const excelToJson = require('convert-excel-to-json');
export function parseItem(xlsxfile: Buffer){
    return new Promise(function(resolve,result){
        try{
            const result = excelToJson({
                //sourceFile: './testdata/casv/caexcl/popln',
                //input = 'xlsxfile'
                sourceFile:'.xlsx',
                header:{
                    rows:1
                }
            });
            resolve(result);
        }
        catch(error){
            console.error(error);
        }

    })
   
}

FocusEvent.readFile('./testdata/csv/testA.csv').then(data => {
    console.log(typeofdata);
    console.log(data);

    csv().fromString(data.toString()).then((result:any) => {

    })
    catch((err:any)=> {

    })
})