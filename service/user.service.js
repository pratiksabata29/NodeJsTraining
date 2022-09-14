import {
	addUserDao,
	deleteUserDao,
	getAllUsersDao,
	getUserByIdDao,
	updateUserDao,
} from '../dao/user.js';
const getAllUsersService = async (t) => await getAllUsersDao(t);
const getUserByIdService = async (t, id) => await getUserByIdDao(t, id);
const deleteUserService = async (t, id) => await deleteUserDao(t, id);
const addUserService = async (t, data) => await addUserDao(t, data);
const updateUserService = async (t, id, data) =>
	await updateUserDao(t, id, data);
// const getUserByIdService = async (t, id) => await getUserByIdDao(t, id);
// const addUserService = async (t, data) => await addUserDao(t, data);
// const updateUserService = async (t, data, id) =>
// 	await updateUserDao(t, data, id);
export {
	getAllUsersService,
	getUserByIdService,
	addUserService,
	updateUserService,
	deleteUserService,
};
