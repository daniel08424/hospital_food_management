import express from 'express';
import {getDeliveryPersonnel} from '../controllers/pantryContacts.js';
import { getPatients } from '../controllers/adminController.js';
import {getMeals} from '../controllers/mealController.js';

const router = express.Router();


router.get('/deliveryDetails', getDeliveryPersonnel);
router.get('/patientDetails', getPatients);
router.get('/mealDetails', getMeals);

export default router;
