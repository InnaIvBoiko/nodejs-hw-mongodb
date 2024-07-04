import { Router } from 'express';
import contactsRouter from './contacts.js';
import authRouter from './auth.js';

const router = Router();

router.use('/contacts', contactsRouter);
router.use('/auth', authRouter);
router.use('/auth/send-reset-email', authRouter);
router.use('/auth/reset-pwd', authRouter);

export default router;