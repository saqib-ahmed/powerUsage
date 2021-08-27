## Power Usage Storage component for POW R2

This module connects to the [device's web socket](https://ewelink-api.vercel.app/docs/available-methods/openwebsocket) and stores the corresponding power statistics in a mongodb instance. Update the environment variables for your credentials and execute `pm2 start pm2.json` or `node socket.js` to run the code. 

> EWEEMAIL = <your ewelink email>
> EWEPASSWORD = <your ewelink password>
> EWEREGION = <your ewelink region>

You can get the region using [ewelink-api's](https://github.com/skydiver/ewelink-api) [getRegion()](https://ewelink-api.vercel.app/docs/available-methods/getregion) method.