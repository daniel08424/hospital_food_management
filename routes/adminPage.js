import { Router } from 'express';
import { getPatients, addPatient ,deletePatient} from '../controllers/adminController.js';

const router = Router();

router.get('/patients', getPatients); 
router.post('/patients', addPatient);  
router.delete('/patients/:id', deletePatient); 

export default router;
