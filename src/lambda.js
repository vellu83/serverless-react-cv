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
    console.log('Connecting to: ', process.env.MONGODB_URI)
    const client = await MongoClient.connect(process.env.MONGODB_URI);

    // Specify which database we want to use
    cachedDb = await client.db('CVdatabase');

    return cachedDb;
}

export async function jobs(event, context) {

    context.callbackWaitsForEmptyEventLoop = false;

    const db = await connectToDatabase();

    const jobs = await db.collection('jobs').find({}).toArray();

    return {
        statusCode: 200,
        body: JSON.stringify(jobs, null, 2)
    };
}

export async function edu(event, context) {

    context.callbackWaitsForEmptyEventLoop = false;

    const db = await connectToDatabase();

    const educations = await db.collection('educations').find({}).toArray();

    return {
        statusCode: 200,
        body: JSON.stringify(educations, null, 2)
    };

}

export async function links(event, context) {

    context.callbackWaitsForEmptyEventLoop = false;

    const db = await connectToDatabase();

    const links = await db.collection('links').find({}).toArray();

    return {
        statusCode: 200,
        body: JSON.stringify(links, null, 2)
    };

}

export async function hobbies(event, context) {

    context.callbackWaitsForEmptyEventLoop = false;

    const db = await connectToDatabase();

    const hobbies = await db.collection('hobbies').find({}).toArray();

    return {
        statusCode: 200,
        body: JSON.stringify(hobbies, null, 2)
    };

}

export async function root(event, context) {

    context.callbackWaitsForEmptyEventLoop = false;

    return {
        statusCode: 200,
        body: JSON.stringify({ response: 'nothing to see here..' })
    };
}