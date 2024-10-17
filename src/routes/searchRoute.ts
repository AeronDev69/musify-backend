import { Router } from 'express';
import { search } from '../controller/searchController';

const searchRoute = Router();

searchRoute.get('/search', search);

export default searchRoute;
