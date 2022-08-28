/**
 * All data files should have all continent and country names in lowercase
 * all data fragment files will merged into the main data.json file
 *
 *
 */
const { allYearsAllLocation } = require("../pages/api/api-data.js");
const fs = require("fs/promises");


//read and parse JSON data files
let dataString = JSON.stringify(allYearsAllLocation);

//read dir => require all JSON files => parse all => flat merge all arrays => append to data.json file
let dataArr = [];
let allFragmentNames = [];

const readFilesAll = async () => {
  try {
    let fileNames = await fs.readdir("./fragments");

    dataArr = [...fileNames];

    dataArr.forEach((item) => {
      allFragmentNames.push(require("./fragments/" + item));
    });

    let flattened = allFragmentNames.flat();
    let mergeAll = allYearsAllLocation.concat(flattened);

    console.log(mergeAll);

    let writeAll = await fs.writeFile("./data.json", JSON.stringify(mergeAll));

    //will return undefined upon successful write
    console.log(writeAll);
  } catch (error) {
    console.log(error);
  }
};

readFilesAll();
