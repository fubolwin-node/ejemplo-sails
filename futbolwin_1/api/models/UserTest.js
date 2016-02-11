

module.exports = {
	
	connection: 'nodeSailsTestDBPostgresqlServer',
	tableName: 'usertest',
	autoCreatedAt: false,
	autoUpdatedAt: false,
	attributes: {
		id: {
			type: 'integer',
			required: true,
			primaryKey: true
		},
		name: {
			type: 'string',
			required: true,
			size: 40
		},
		lastname: {
			type: 'string',
			required: false,
			size: 40
		},
		email: {
			type: 'string',
			required: true,
			size: 40
		},
		encryptedpassword: {
			type: 'string',
			required: true,
			size: 100
		},
	} 

}