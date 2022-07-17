const jsonDat = require("./data.json");
const fs = require("node:fs");

let newArr = [];

jsonDat.forEach((entry) => {
  entry.allContinents.forEach((item) => {
    item.events.forEach((e) => {
        entry.allContinents.push(e);
    });
    newArr.push(entry.allContinents)

});
});

// console.log(newArr)

let mergArr =[];
let mergObj;

newArr.forEach((i)=> {
    mergObj = {...i[0],...i[1]}
    mergArr.push(mergObj)
})


for (let index = 0; index < mergArr.length; index++) {
    delete mergArr[index]['events']
}
    
console.log(mergArr)

fs.writeFile('flat-data.json',JSON.stringify(mergArr),(err)=> console.error(err))


let flat = newArr.flat()
