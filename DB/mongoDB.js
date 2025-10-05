const mongoose = require('mongoose')


const mongoDB = async () => {
        try{
            const con = await mongoose.connect(process.env.MONGO_URL,{
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(()=>console.log('mongodb is connected'));
            
        }catch(err){
            console.log(`error ${err}`)
        }
    }

module.exports = mongoDB