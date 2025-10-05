const mongoose = require('mongoose')


const mongoDB = async () => {
        try{
            const con = await mongoose.connect(process.env.MONGO_URL)
            .then(()=>console.log('mongodb is connected'));
            
        }catch(err){
            console.log(`error ${err}`)
            process.exit(1)
        }
    }

module.exports = mongoDB