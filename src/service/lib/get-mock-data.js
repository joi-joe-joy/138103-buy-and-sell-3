'use strict';

const fs = require(`fs`).promises;
const {FILENAME} = require(`../../constants`);
let data = null;

const getMockData = async () => {
  if (data !== null) {
    return Promise.resolve(data);
  }

  try {
    const fileContent = await fs.readFile(FILENAME);
    data = JSON.parse(fileContent);
  } catch (err) {
    console.log(err);
    Promise.reject(err);
  }

  return Promise.resolve(data);
};

module.exports = {
  getMockData
};
