import { Router } from 'express';
import { search } from '../controller/searchController';

const searchRoute = Router();

searchRoute.get('/api/search', search);

export default searchRoute;
