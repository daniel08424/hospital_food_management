// src/routes/authRoutes.js
import { Router } from 'express';
import { signUp, signIn, logOut } from '../controllers/authController.js';
const router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/logout', logOut);

export default router;
