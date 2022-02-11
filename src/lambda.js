import * as mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

// Once we connect to the database once, we'll store that connection
// and reuse it so that we don't have to connect to the database on every request.
let cachedDb = null;

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }

    // Connect to our MongoDB database hosted on MongoDB Atlas
    const client = await MongoClient.connect(process.env.MONGODB_URI);

    // Specify which database we want to use
    cachedDb = await client.db('CVdatabase');

    return cachedDb;
}

export async function handler(event, context) {

    context.callbackWaitsForEmptyEventLoop = false;

    const db = await connectToDatabase();

    const jobs = await db.collection('jobs').find({}).toArray();

    return {
        statusCode: 200,
        body: JSON.stringify(jobs, null, 2)
    };
}