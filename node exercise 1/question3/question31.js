var fs = require('fs');

fs.appendFile('ukinode.txt', 'Hello Welcome to uki', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
