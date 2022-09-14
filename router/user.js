import express from 'express';
import {
	addUser,
	deleteUser,
	getAllUsers,
	getUserById,
	updateUser,
} from '../controller/user.js';
// import {
// 	addUser,
// 	deleteUser,
// 	getUsersById,
// 	updateUser,
// } from '../database/db.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.post('/', addUser);
router.delete('/:id', deleteUser);

export default router;
