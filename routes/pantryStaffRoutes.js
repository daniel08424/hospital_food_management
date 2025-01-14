import { Router } from 'express';
import { getPantryStaff, addPantryStaff, deletePantryStaff } from '../controllers/pantryStaffController.js';

const router = Router();

router.get('/pantrystaff', getPantryStaff);      // Get all pantry staff
router.post('/pantrystaff', addPantryStaff);     // Add a new staff member
router.delete('/pantrystaff/:id', deletePantryStaff); // Delete a staff member

export default router;
