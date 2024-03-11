import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$unset': [
      '_id', '__v'
    ]
  }
];

const client = await MongoClient.connect(
  '',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const coll = client.db('test').collection('users');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();