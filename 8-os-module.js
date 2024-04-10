const os = require('os');
//console.log(os);

//info about current user
const user = os.userInfo();
//console.log(user);

//uptime
//console.log(os.uptime());

const osinfo ={
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem()/1048576,
    freeMem : os.freemem()/1048576
}
console.log(osinfo);
