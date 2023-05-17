import express from 'express';
import SongController from '../controller/songController.js';
const router = express.Router();

router.get('/song', SongController.getAllDoc)
router.post('/song', SongController.postAllDoc)

export default router