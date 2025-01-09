require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const sawClient = require('./models/sawClients');
const cors = require('cors');
const PORT = process.env.PORT;
const app = express();
const router = require('./routes/index')
app.use(cors());
app.use(express.json());
app.use('/api', router);
const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    }catch(e){
        console.log(e);
    }
}

start()
