// const {MongoClient} = require('mongodb');

// const url = 'mongodb://localhost:27017';
// const database = 'e-commerce';
// const client = new MongoClient(url);

// async function getData(){

// let result = await client.connect();
// let db = result.db(database);
// let collection = db.collection('products');
// // console.log(collection.find({}).toArray());
// let response = await collection.find({}).toArray();

// console.log(response);

// }
// getData();


const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const database = 'ecom';

const client = new MongoClient(url);

async function getData() {
  await client.connect();
  const db = client.db(database);
  const collection = db.collection('product');
  const data = await collection.find({}).toArray();
  console.log(data);
  client.close();
}

getData();
