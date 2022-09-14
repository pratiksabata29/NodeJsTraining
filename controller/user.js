import db from '../models/index.js';
import {
	addUserService,
	deleteUserService,
	getAllUsersService,
	getUserByIdService,
	updateUserService,
} from '../service/user.service.js';
const { sequelize } = db.db;

const getAllUsers = async (req, res, next) => {
	const result = await sequelize.transaction(async (t) => {
		return await getAllUsersService(t);
	});
	res.status(200).send({
		success: true,
		message: result.length > 0 ? 'Data Found!!!' : 'No Data Found !!!',
		data: result,
	});
	next();
};

const getUserById = async (req, res, next) => {
	const { id } = req.params;
	const result = await sequelize.transaction(async (t) => {
		return await getUserByIdService(t, id);
	});
	res.status(200).send({
		success: true,
		message: result ? 'Data Found!!!' : 'No Data Found !!!',
		data: result,
	});
	next();
};

const deleteUser = async (req, res, next) => {
	const { id } = req.params;
	const result = await sequelize.transaction(async (t) => {
		return await deleteUserService(t, id);
	});
	res.status(200).send({
		success: true,
		message: result ? 'Deleted successfuly!!!' : 'No Data Found !!!',
		data: result,
	});
	next();
};

const updateUser = async (req, res, next) => {
	const { body, params } = req;
	const { id } = params;

	await sequelize.transaction(async (t) => {
		return await updateUserService(t, id, body);
	});
	res.status(200).send({
		success: true,
		message: 'Updated successfully !!!',
	});
	next();
};

const addUser = async (req, res, next) => {
	const { body } = req;
	await sequelize.transaction(async (t) => {
		return await addUserService(t, body);
	});
	res.status(201).send({
		success: true,
		message: 'Inserted successfully!!!',
	});
	next();
};

// const getUserById = async (req, res, next) => {
// 	const { id } = req.params;
// 	const result = await sequelize.transaction(async (t) => {
// 		return await getUserByIdService(t, id);
// 	});
// 	res.status(200).send({
// 		success: true,
// 		message: result ? 'Data Found!!!' : 'No Data Found !!!',
// 		data: result,
// 	});
// 	next();
// };

// const addUser = async (req, res, next) => {
// 	const data = req.body;
// 	await sequelize.transaction(async (t) => {
// 		return await addUserService(t, data);
// 	});
// 	res.status(200).send({
// 		success: true,
// 		message: 'Added successfully!!!',
// 	});
// 	next();
// };

// const updateUser = async (req, res, next) => {
// 	const data = req.body;
// 	const id = req.params;
// 	await sequelize.transaction(async (t) => {
// 		return await updateUserService(t, data, id);
// 	});
// 	res.status(200).send({
// 		success: true,
// 		message: 'updated successfully!!!',
// 	});
// 	next();
// };

export { getAllUsers, getUserById, addUser, updateUser, deleteUser };
