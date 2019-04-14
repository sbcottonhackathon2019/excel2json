/*
'use strict';
const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: './testdata/casv/caexcl/popln.xlsx'
})
*/




'use strict';
const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: './testdata/casv/caexcl/popln.xlsx',
    header:{
        rows: 1 
    }
});
console.log(JSON.stringify(result));