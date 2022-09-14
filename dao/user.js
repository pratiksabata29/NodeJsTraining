import db from '../models/index.js';
const { sequelize, employee } = db.db;

const getAllUsersDao = async (t) => {
	return await employee.findAll({ transaction: t });
};

const getUserByIdDao = async (t, id) => {
	return await employee.findOne(
		{
			where: {
				id,
			},
		},
		{ transaction: t }
	);
};

const updateUserDao = async (t, id, data) => {
	return await employee.update(
		{
			name: data.name,
			email: data.email,
		},
		{
			where: {
				id,
			},
		},
		{ transaction: t }
	);
};

const deleteUserDao = async (t, id) => {
	return await employee.destroy(
		{
			where: {
				id,
			},
		},
		{ transaction: t }
	);
};

const addUserDao = async (t, data) => {
	await employee.create(data, { transaction: t });
};

export {
	getAllUsersDao,
	getUserByIdDao,
	addUserDao,
	updateUserDao,
	deleteUserDao,
};
