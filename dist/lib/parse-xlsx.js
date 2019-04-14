/*
import * as tapTypes from './tap-types'
var parsexlsx = require('convert-excel-to-json').parsexlsx
const excelToJson = require('convert-excel-to-json');
export function parseItem(xlsxfile: Buffer) {
  return new Promise(function(resolve, reject) {

      export async parsexlsx(xlsxfile, function(err: any, result: any) {
      if (result != null)
      
      {
       const result = excelToJson({
        sourceFile: './testdata/casv/caexcl/popln.xlsx',
        header:{
            rows: 1
    }
});
        console.log(JSON.stringify(result));
        resolve(result);


} else
     {
        reject(Error('It broke'))
      }
    })
  })
}
*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const excelToJson = require('convert-excel-to-json');
function parseItem(xlsxfile) {
    return new Promise(function (resolve, result) {
        try {
            const result = excelToJson({
                sourceFile: './testdata/casv/caexcl/popln.xlsx',
                header: {
                    rows: 1
                }
            });
            resolve(result);
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.parseItem = parseItem;
//# sourceMappingURL=parse-xlsx.js.map