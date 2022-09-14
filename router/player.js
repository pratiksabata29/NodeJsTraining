import express from 'express';
import { addAPlayers, getAllPlayers } from '../controller/player.js';
const router = express.Router();
router.get('/', getAllPlayers);

// router.get('/:id', (req, res) => {
// 	res.send(
// 		playerList.find((player) => player.id === parseInt(req.params.id))
// 	);
// });

// router.patch('/:id', (req, res) => {
// 	const { body, params } = req;
// 	playerList.forEach((player) => {
// 		if (player.id === parseInt(params.id)) {
// 			if (body.city) player.city = body.city;
// 		}
// 	});
// 	res.send('Succesfully updated player to the DB');
// });

// router.delete('/:id', (req, res) => {
// 	const { params } = req;
// 	const idx = playerList.findIndex(
// 		(player) => player.id === parseInt(params.id)
// 	);
// 	if (idx >= 0) delete playerList[idx];
// 	res.send('Succesfully deleted player to the DB');
// });

router.post('/', addAPlayers);

// Put- When we modify the complete data
// patch - when we want to modify a part of the data

export default router;
