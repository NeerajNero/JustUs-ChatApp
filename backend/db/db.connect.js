import mongoose from 'mongoose'

const initialiseDatabase = () => {
    const connection = mongoose.connect(process.env.MONGO_DB_URI)
    if(!connection){
        console.log("error connecting to database")
    }
    console.log("connection to database was successfull")
}

export default initialiseDatabase