import { Router } from 'express';
import { search, serveSearch } from '../controller/searchController';

const searchRoute = Router();

searchRoute.get('/search', serveSearch);
searchRoute.get('/api/search', search);

export default searchRoute;
