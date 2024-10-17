import { Router } from 'express';
import { auth } from '../controller/authController';

const authRoute = Router();

authRoute.get('/api/auth/google', auth);

export default authRoute;
