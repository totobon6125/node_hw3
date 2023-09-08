import express from 'express';

import { prisma } from '../utils/prisma/index.js'
import authMiddleware from '../middlewares/auth.js';

const router = express.Router()


export default router;