import { Router } from 'express';
import { getMeals, addMeal, deleteMeal } from '../controllers/mealController.js';

const router = Router();

router.get('/meals', getMeals);       // Get all meal tracking entries
router.post('/meals', addMeal);       // Add a new meal entry
router.delete('/meals/:id', deleteMeal); // Delete a meal entry by ID

export default router;
