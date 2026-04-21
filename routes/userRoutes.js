import express from 'express';
import { adminLogin } from '../controller/userController.js';

const router = express.Router();

// Admin authentication only
router.post('/admin', adminLogin);

export default router;
