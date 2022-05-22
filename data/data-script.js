/**
 * All data files should have all continent and country names in lowercase
 * all data fragment files will merged into the main data.json file
 *
 *
 */

const { allYearsAllLocation } = require("../pages/api/api-data.js");
const fs = require("fs/promises");
const fsCallback = require("fs");

//read and parse JSON data files
let dataString = JSON.stringify(allYearsAllLocation);

// fs.writeFile('data.json',dataString).catch((err)=> console.log(err))

//read dir => require all JSON files => parse all => flat merge all arrays => append to data.json file
let dataArr = [];

let allData = [];

const readFilesAll = async () => {
  try {
    let fileNames = await fs.readdir("./fragments");

    dataArr = [...fileNames];

    dataArr.forEach((item) => {
      allData.push(require("./fragments/" + item));
    });

    let flattened = allData.flat();
    let mergeAll = allYearsAllLocation.concat(flattened);

    console.log(mergeAll);

    let writeAll = await fs.writeFile("./data.json", JSON.stringify(mergeAll));

    console.log(writeAll);
  } catch (error) {
    console.log(error);
  }
};

readFilesAll();
