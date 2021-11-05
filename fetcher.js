const request = require('request');
const fs = require('fs');
const arg = process.argv.splice(2);

request(arg[0], (error, response, body) => {

  fs.writeFile('./index.html', body, body => {
    if (body) {
      console.body(body);
      return;
    } fs.readFile('./index.html',{encoding: 'utf-8'}, (err, data) => {
      if (err) {
        return console.log(err);
      }
    
      console.log(`downloaded and saved ${(data.length)} from ./index.html`);

    });
  });
});