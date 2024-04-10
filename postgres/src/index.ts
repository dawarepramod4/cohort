import { Client } from "pg";
const client = new Client("postgresql://learn-db_owner:uHyz2pkiTQF3@ep-withered-hat-a1cez8ep.ap-southeast-1.aws.neon.tech/learn-db?sslmode=require");

// client.connect();

 client.connect();
async function createTable() {
    await client.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL
        );
    `);
}

createTable().then(() => {
    console.log("Table created successfully");
    insertData();
}).catch((err) => { 
    console.error(err);
    client.end();
});


async function insertData() {
    //use this then db cannot be modified directly using the apis
    const insertQuery = `
    INSERT INTO users (name, email)
    VALUES ($1, $2)`;
const values = ["John Doe", "email@email.com"]
    await client.query(insertQuery,values);}

