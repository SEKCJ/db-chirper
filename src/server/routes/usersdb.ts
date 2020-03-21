import * as express from 'express';
import Users from './db/users'

const router = express.Router();

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    if (id) {
        try {
            res.json((await Users.one(req.params.id))[0])
        } catch (err) {
            if (err) throw err;
            res.sendStatus(500);
        }
    } else {
        try {
            res.json(await Users.all());
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    }
})

router.post('/', async (req, res) => {
    let Name = req.body.name;
    let Email = req.body.email;
    let Password = req.body.password;
    try {
        res.json(await Users.post(Name, Email, Password));
    } catch (err) {
        res.sendStatus(500);
    }
})

router.put('/:id?', async (req, res) => {
    let id = req.params.id;
    let Name = req.body.name;
    let Email = req.body.email;
    let Password = req.body.password;
    if (id) {
        try {
            res.json(await Users.put(id, Name, Email, Password));
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
            res.json(await Users.del(id))
        } catch (err) {
            if (err) throw err;
            res.sendStatus(500);
        }
    } else {
        res.sendStatus(500).json("id not provided");
    }
})



export default router;