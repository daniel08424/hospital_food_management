import { Router } from 'express';
import { getDietCharts, addDietChart, deleteDietChart } from '../controllers/dietController.js';

const router = Router();

router.get('/dietcharts', getDietCharts);    // Get all diet charts
router.post('/dietcharts', addDietChart);    // Add a new diet chart
router.delete('/dietcharts/:id', deleteDietChart); // Delete a diet chart

export default router;
