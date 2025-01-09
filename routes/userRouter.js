const {Router} = require('express');
const router = new Router();
const Clients = require('../models/sawClients');
router.post('/reg', async (req, res) => {
    const type = await Clients.create({name: req.body.name, mail: req.body.email, address: req.body.address, phone: req.body.phone});
    return res.json(type)
})
module.exports = router;