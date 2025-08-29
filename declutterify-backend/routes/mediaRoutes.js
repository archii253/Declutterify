import express from 'express';
import multer from 'multer';
import { uploadMedia, getAllMedia } from '../controllers/mediaController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

router.post('/upload', upload.array('files'), uploadMedia);
router.get('/', getAllMedia);

export default router;
