export default (sequelize, Sequelize) => {
	const Office = sequelize.define('office', {
		office_name: {
			type: Sequelize.STRING,
		},
		department: {
			type: Sequelize.STRING,
		},
	});
	return Office;
};
