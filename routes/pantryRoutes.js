import express from 'express';
import { addDeliveryPersonnel,getDeliveryPersonnel,deleteDeliveryPersonnel,editDeliveryPersonnel} from '../controllers/pantryContacts.js'; // import controller functions

const router = express.Router();


router.post('/deliveryPersonal', addDeliveryPersonnel);
router.get('/deliveryPersonal', getDeliveryPersonnel);

router.delete('/deliveryPersonal/:id', deleteDeliveryPersonnel);
router.put('/deliveryPersonal/:id', editDeliveryPersonnel);


// router.post('/api/assign-meal', assignMealToDeliveryPersonnel);


// router.put('/api/meals/:id', updateMealStatus);

export default router;
