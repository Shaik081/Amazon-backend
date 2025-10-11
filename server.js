const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const mongoDB = require('./DB/mongoDB')
const productRoute = require('./routes/productRoute')

dotenv.config({path:path.join(__dirname,'config','.env')})

mongoDB()

app.use(express.json())
app.use(cors())

app.use('/api/',productRoute)


app.listen(process.env.PORT,()=>{
    console.log('server is running on ' + process.env.PORT);
})


