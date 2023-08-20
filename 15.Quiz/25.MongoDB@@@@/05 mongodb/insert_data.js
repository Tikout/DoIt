
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;


async function processDB() {
    const url = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(url); 

    try {
        await client.connect();
        const db = client.db("schooldbtest"); // jeśli nie ma bazy tworzy nową
        
        let collection = db.collection("students"); // jesli nie ma kolekcji tworzy nową

        await collection.insertOne( { name: "Asia", email: "asia@examples.com" } );
        await collection.insertOne( { name: "Ola", email: "ola@examples.com" } );

        const students = [
            { name: "Kasia", email: "kasia@examples.com" },
            { name: "Tomek", email: "tomek@examples.com" },
            { name: "Daniel", email: "daniel@examples.com" },
        ];

        const options = { ordered: true }; // jesli jeden element się nie zapisze to reszta też
                                           // nie będzie zapisana
         
        const result = await collection.insertMany(students, options);
        console.log(`${result.insertedCount} students were saved`);

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

processDB();