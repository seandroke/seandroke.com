load('data.js');

var connection = new Mongo();

var db = connection.getDB("admin");

db.auth("root", "rootpassword");

db = db.getSiblingDB('seandroke');

db.createCollection("attributes", {capped:true, size:10000, max:1});

db.attributes.insertOne(data);