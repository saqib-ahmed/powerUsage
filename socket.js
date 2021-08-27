const ewelink = require('ewelink-api');
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// instantiate class
const connection = new ewelink({
	email: process.env.EWEEMAIL,
	password: process.env.EWEPASSWORD,
	region: process.env.EWEREGION
});

async function main(){
	// login into eWeLink
	await connection.getCredentials();
	await client.connect();
	console.log('Connected successfully to database server');
	const db = client.db('power');
	const collection = db.collection('powerUsage');
	// call openWebSocket method with a callback as argument
	const socket = await connection.openWebSocket(async data => {
  		if(data.userAgent && data.userAgent == "device" && data.params){
			// data is the message from eWeLink
			data.timestamp = + new Date()
			const insertResult = await collection.insertOne(data);
			console.log('Inserted document =>', insertResult);
		} else {
			console.log("Got non power packet: ", data)
		}
	});
}

main();
