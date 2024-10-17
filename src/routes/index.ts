import { Router } from 'express';
import authRoute from './authRoute';
import searchRoute from './searchRoute';

const routes = Router();

routes.use(authRoute);
routes.use(searchRoute);

export default routes;
