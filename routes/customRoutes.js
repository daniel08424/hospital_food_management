import {getDietCharts} from '../controllers/dietController.js';
import {getMeals} from '../controllers/mealController.js';
import {updateMeals} from '../controllers/mealController.js'
import { Router } from 'express';

const router = Router();

router.get('/dietcharts', getDietCharts);
router.get('/meals', getMeals);    
router.put('/meals/:id',updateMeals)

export default router;