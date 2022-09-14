import { playerList } from '../data/player.js';

export const getAllPlayers = (req, res) => {
	res.send(playerList);
};

export const addAPlayers = (req, res) => {
	const { body } = req;
	playerList.push(body);
	res.send('Succesfully added player to the DB');
};
