

const { MongoClient, ObjectId } = require("mongodb");
 
let singleton;
 
async function connect() {
    if (singleton) return singleton;
 
    const client = new MongoClient(process.env.MONGO_HOST);
    //const client = new MongoClient(process.env.MONGO_HOST);
    await client.connect();
 
    singleton = client.db(process.env.MONGO_DATABASE);
    //singleton = client.db(process.env.MONGO_DATABASE);
    return singleton;
}

//const COLLECTION = "funcionarios";
 
async function findAll(COLLECTION) {
    const db = await connect();
    return db.collection(COLLECTION).find().toArray();
}

async function findOne(COLLECTION, id) {
    
    const db = await connect();
    return db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
}

async function updateOne(COLLECTION,id,DOC) {
    
    const db = await connect();
    return db.collection(COLLECTION).updateOne({ _id: new ObjectId(id)}, {$set: DOC});
}

async function Insert(COLLECTION, id) {
    
    const db = await connect();
    return db.collection(COLLECTION).insertOne(id);
}

async function findExpressao(filtro) {    

    const db = await connect();

    const expressaoregular = [];
    for (const chave in filtro) {
        expressaoregular[chave] = new RegExp(filtro[chave], "i");
      }
    
      console.log(expressaoregular);

    return db.collection("tecnicas_tag").find( { tags: { $all: expressaoregular } } ).toArray();    
        
}
 
async function insertdb(COLLECTION, item) {
    const db = await connect();
    return db.collection(COLLECTION).insertOne(item);
}


async function deletedb(COLLECTION, id) {
    
    const db = await connect();
    return db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });
}

async function updatedb(COLLECTION, id,dados) {
        const db = await connect();
      delete dados._id;
    return db.collection(COLLECTION).updateOne({ _id: new ObjectId(id) }, { $set: dados});
}

module.exports = { findAll, findOne, findExpressao ,insertdb, deletedb,updateOne,updatedb} 