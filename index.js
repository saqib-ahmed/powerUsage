const ewelink = require('ewelink-api');

/* instantiate class */
const connection = new ewelink({
  email: process.env.EWEEMAIL,
  password: process.env.EWEPASSWORD,
  region: process.env.EWEREGION
});

/* get all devices */
async function getDevices(){
	const devices = await connection.getDevices();
	console.log(devices);
}

getDevices();
