import express from 'express';

// import UsersRouter from './users.js';
// import PostsRouter from './posts.js';
import SignUpRouter from './signup.js';
// import CommentsRouter from './comments.js'

const router = express.Router()

router.use('/', [SignUpRouter])

export default router;