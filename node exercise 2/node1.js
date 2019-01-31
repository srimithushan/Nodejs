// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/Music";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log(" created!");
//   db.close();
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/Musics";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Musics");
//   dbo.createCollection("Details", function(err, res) {
//     if (err) throw err;
//     console.log("Music Collection created!");
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/Musics";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Musics");
//   var myobj = [
//   {SongName:"Evano Oruvan",                    Film:"Alai Payuthey",   MusicDirector:"A.R.Rahman",        Singer:"Swarnalatha"},
//   {SongName:"Roja Poonthoddam",                Film:"Kannukkul Nilavu",MusicDirector:"Illayaraaja",       Singer:"Unnikrishnan,Anuradha"},
//   {SongName:"Vennilave Vennilave Vinaithaandi",Film:"Minsaara Kanavu", MusicDirector:"A.R.Rahman",        Singer:"Hariharan,Sadhana Sargam"},
//   {SongName:"Sollamal Thoddu Chellum",         Film:"Dheena",          MusicDirector:"Yuven Shankar Raja",Singer:"Hariharan"}];
//   dbo.collection("Details").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });

//
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/Musics";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Musics");
//   dbo.collection("Details").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/Musics";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Musics");
//   var sort = { MusicDirector:"A.R.Rahman"};
//   dbo.collection("Details").find(sort).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Musics";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Musics");
  dbo.collection("Details").find(({MusicDirector : 'Ilaiyaraaja'},{Singer : 'Unnikrishnan,'})).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});






















// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/Musics";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Musics");
//   var myquery = { Film:"Alai Payuthey" };
//   dbo.collection("Details").deleteOne(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/Musics";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Musics");
//   var myobj =   {SongName:"Naan un Azhaginilae",Film:24 ,MusicDirector:"A.R.Rahman",Singer:"Arijit Singh"}
// ;
//   dbo.collection("Details").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/Musics";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Musics");
//   dbo.collection("Details").find(({Singer : "Hariharan"},{Film : 'Minsaara Kanavu'})).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/Musics";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Musics");
//   dbo.collection("Details").find({},{_id:false,Singer:true, Film:false, SongName:false,MusicDirector:false,} ).toArray(function(err, result){
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
