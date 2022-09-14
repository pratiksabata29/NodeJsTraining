import pool from 'pg';
const conn = pool.Pool;
const connection = new conn({
	user: 'postgres',
	host: 'localhost',
	database: 'sql-db-nodejs',
	password: 'Hasher@123',
	port: 5432,
});

const getUsers = (request, response) => {
	connection.query(
		'SELECT * FROM my_schema.users ORDER BY id ASC',
		(error, results) => {
			if (error) {
				throw error;
			}
			response.status(200).json(results.rows);
		}
	);
};

const getUsersById = (request, response) => {
	const { id } = request.params;
	connection.query(
		'SELECT * FROM my_schema.users where id=($1)',
		[id],
		(error, results) => {
			if (error) {
				throw error;
			}
			response.status(200).json(results.rows);
		}
	);
};

const addUser = (request, response) => {
	const { body } = request;
	connection.query(
		'INSERT INTO my_schema.users ( name,email) values($1,$2) ',
		[body.name, body.email],
		(error, results) => {
			if (error) {
				throw error;
			}
			response.status(200).json(results);
		}
	);
};

const updateUser = (request, response) => {
	const { body, params } = request;
	connection.query(
		'UPDATE my_schema.users  set name=$1 , email=$2 where id=$3',
		[body.name, body.email, params.id],
		(error, results) => {
			if (error) {
				throw error;
			}
			response.status(200).json('Updated succesfully');
		}
	);
};

const deleteUser = (request, response) => {
	const { params } = request;
	connection.query(
		'DELETE from my_schema.users where id=$1',
		[params.id],
		(error, results) => {
			if (error) {
				throw error;
			}
			response.status(200).json('Deleted succesfully');
		}
	);
};

export { getUsers, addUser, getUsersById, updateUser, deleteUser };
