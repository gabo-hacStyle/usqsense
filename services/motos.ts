import client from "../lib/mongodb";

export async function getMotos() {
    try {
        await client.connect();
        const database = client.db("sample_mflix");
        const collection = database.collection("movies");
        const movies = await collection.find({}).limit(10).toArray();
        
        return movies
        
    } catch (error: any) {
        throw new Error(error.message);
    } finally {
        await client.close();
    }
}