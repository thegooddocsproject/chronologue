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

let flat = newArr.flat()

let mergObj;


console.log(flat);