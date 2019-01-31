// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/students";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/students";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("students");
//   dbo.createCollection("​studentmarks", function(err, res) {
//     if (err) throw err;
//     console.log("​Studentmarks Collection created!");
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/students";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("students");
//   var myobj = [
//     {name : 'Mala' ,     maths_marks : '45' , english_marks : '53' , science_marks : '72' },
//     {name : 'Vanu' ,     maths_marks : '80' , english_marks : '75' , science_marks : '85' },
//     {name : 'Kala' ,     maths_marks : '32' , english_marks : '46' , science_marks : '53' },
//     {name : 'Aruli' ,    maths_marks : '78' , english_marks : '85' , science_marks : '80' },
//     {name : 'Shayu' ,    maths_marks : '80' , english_marks : '76' , science_marks : '65' },
//     {name : 'Kumaran' ,  maths_marks : '32' , english_marks : '73' , science_marks : '84' },
//     {name : 'Lucky' ,    maths_marks : '66' , english_marks : '90' , science_marks : '45' },
//     {name : 'Gva' ,      maths_marks : '71' , english_marks : '75' , science_marks : '56' },
//     {name : 'Raam' ,     maths_marks : '41' , english_marks : '65' , science_marks : '88' }
//   ];
//   dbo.collection("​studentmarks").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });
//
//
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/students";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("students");
//   var myquery = { maths_marks: '45' };
//   var newvalues = { $set: {name: "Mala", maths_marks: "51" } };
//   dbo.collection("​studentmarks").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/students";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("students");
//   dbo.collection("​studentmarks").find({maths_marks:{$gt:'50'}}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/students";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("students");
//   var query = { };
//   var newvalues={$set:{Average:" "}};
//   dbo.collection("​studentmarks").updateMany (query,newvalues ,function(err, result) {
//     if (err) throw err;
//     console.log("Average is Input");
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/students";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("students");
//   var myquery = { science_marks: '45' };
//   var newvalues = { $set: {name: "Lucky", Marks_science: '75' } };
//   dbo.collection("​studentmarks").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/students";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("students");
//   dbo.collection("​studentmarks").find({maths_marks:{$gt:'50'}, science_marks: {$gt:'50'}, english_marks: {$gt:'50'}}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/students";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("students");
//   dbo.collection("​studentmarks").find({maths_marks:{$lt:'50'}, english_marks: {$gt:'50'}}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/students";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("students");
//   dbo.collection("​studentmarks").find({maths_marks:{$lt:'40'}, science_marks: {$lt:'40'}}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/students";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("students");
//   var myquery = { name: "Raam" };
//   var newvalues = { $unset: {science_marks: 75} };
//   dbo.collection("​studentmarks").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("Deleted");
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/students";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("students");
//   dbo.collection("​studentmarks").update({name: "John"}, {$rename: {"english_marks":"science_marks"}}, function(err, result) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });

//
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/students";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("students");
//   var myquery = { name: "John" };
//   var newvalues = { $rename: {english_marks: "science_marks"} };
//   dbo.collection("​studentmarks").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("Data Updated");
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/students";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("students");
//   dbo.collection("​studentmarks").remove({name: "Kumaran"}, function(err, result) {
//     if (err) throw err;
//     console.log("Data Deleted");
//     db.close();
//   });
// });


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/students";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("students");
  dbo.collection("​studentmarks").find({name:'Kala'}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
