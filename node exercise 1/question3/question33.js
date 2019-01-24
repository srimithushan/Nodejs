

  var fs = require('fs');

  fs.appendFile('ukinode.txt', ' It is a full scholarship based Accelerator program for Coding in Jaffna, Sri Lanka targeting students who has completed Advanced Level examinations and don’t have access to university education.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
