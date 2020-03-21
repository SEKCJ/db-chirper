import * as express from 'express';
import chirpsRouter from './chirpsdb'
import usersRouter from './usersdb';

let router = express.Router();

router.use('/chirps', chirpsRouter);
router.use('/users', usersRouter);

export default router;
