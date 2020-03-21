import * as express from 'express';
import Chirps from './db/chirps'

const router = express.Router();

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    if (id) {
        try {
            res.json((await Chirps.one(req.params.id))[0])
        } catch (err) {
            if (err) throw err;
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await Chirps.all());
        } catch (err) {
            if (err) throw err;
            res.sendStatus(500)
        }
    }
})

router.post('/', async (req, res) => {
    let userId = parseInt(req.body.userid, 10);
    let Text = req.body.text;
    let Location = req.body.location;
    try {
        res.json(await Chirps.post(userId, Text, Location));
    } catch (err) {
        res.sendStatus(500);
    }
})

router.put('/:id?', async (req, res) => {
    let id = req.params.id;
    let userId = parseInt(req.body.userid, 10);
    let Text = req.body.text;
    let Location = req.body.location;
    if (id) {
        try {
            res.json(await Chirps.put(id, userId, Text, Location));
        } catch (err) {
            if (err) throw err;
            res.sendStatus(500);
        }
    } else {
        res.sendStatus(500).json("id not provided")
    }
})

router.delete('/:id?', async (req, res) => {
    let id = req.params.id;
    if (id) {
        try {
            res.json(await Chirps.del(id))
        } catch (err) {
            if (err) throw err;
            res.sendStatus(500);
        }
    } else {
        res.sendStatus(500).json("id not provided");
    }
})



export default router;