import { connect } from "mongoose";

const dbUrl = 'mongodb://localhost:27017/magic-movies'


export default async function mongooseInit() {
    try {
        
        connect(dbUrl)
        console.log('Successfully connect to DB..');
        
    } catch (error) {
        console.log('Cannot connect to Mongo db');
        
    }
    
}
