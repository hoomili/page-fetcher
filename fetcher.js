const request = require('request');
const url = process.argv[2];
const path = process.argv[3];
const fs = require('fs');
const stdin = process.stdin;



request(url, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body);
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      fs.writeFile(path, body, (err) => {
        if (err) throw err;
        console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
      });
      return;
    }
    console.log(`The ${path} already exists do you want to overwrite it? `);
    stdin.on;
  });
  fs.writeFile(path, body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});