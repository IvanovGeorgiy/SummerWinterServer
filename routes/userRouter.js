const {Router} = require('express');
const router = new Router();
const {Clients} = require('../models/sawClients');
router.post('/reg', async (req, res) => {
//    const{name, email, address, phone} = req.body;
//    const type = await Clients.create({name, email, address, phone});
//    return res.json(type)
})
module.exports = router;