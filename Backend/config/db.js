const mongoose = require('mongoose')

const connectDb = async() =>{
    try {
        const url = process.env.URL
        const mongo = await mongoose.connect(url)
        console.log("Connect to MongoDB")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb