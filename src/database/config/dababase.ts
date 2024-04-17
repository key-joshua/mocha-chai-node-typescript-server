import mongoose from "mongoose";

const DATABASE_URL: string ='mongodb://localhost:27017/mongodbSession';

mongoose.connect(DATABASE_URL)
.then(() => console.log('Mongodb connected successfully.'))
.catch((error: any) => console.log(`Mongodb error ${error}`))