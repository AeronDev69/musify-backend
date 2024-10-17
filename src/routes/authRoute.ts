import { Router } from 'express';
import { auth } from '../controller/authController';

const authRoute = Router();

authRoute.get('/auth/google', auth);

export default authRoute;
