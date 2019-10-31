module.exports = {
	create:{
        firstname: {type: 'string', required: true, max: 8},
        lastname: {type: 'string', required: true, max: 8},
        username: {type: 'string', required: true, max: 8},
		password: {type: 'string', required: true, max: 8},
        contactno: {type: 'string', required: true, max: 12},
        email: {type: 'string', required: true, max: 20}
	},
	update:{
		
	}
};